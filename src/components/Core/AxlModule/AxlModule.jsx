import React from 'react';
import classNames from 'classnames';
import styles from '@bit/zmink.axioline.axl-modulemodule';
import PropTypes from 'prop-types';
import AxlColorID from '@bit/zmink.axioline.axl-color-id';
import PhoenixP from '@bit/zmink.axioline.phoenix-p';
import PhoenixBrand from '@bit/zmink.axioline.phoenix-brand';

export default class AxlModule extends React.PureComponent {
    constructor(props) {
        super(props)

        this.numConnectors = (props.children) ? (props.children.length) : 0;
        this.connSectionWidth = 0;
    }

    faceWidth = () => {
        return Math.floor(this.props.width / 10) * 10;
    }

    mapPropsToConnector = (connector, connectorIndex) => {
        this.connSectionWidth = this.connSectionWidth + (connector.props.numCols * 5)
        if ((connectorIndex === this.numConnectors - 1) && (this.props.hasTopRow)) {
            this.connSectionWidth = this.connSectionWidth / 2 + 2.5;
        }
        switch (connector.props.type) {
            case 'POWER':

                break;
            case 'IO':

                break;
            default:
                break;
        }
        //console.log('Connector Props: ' + JSON.stringify(connector));
        return {}
    }

    withMM = (num) => {
        return num + "mm";
    }

    render() {
        const { moduleName, numCols, fullWidthLogo, width, raisedMidsection, hasTopRow, labels, partName, partNumber, colorCard, children, ...rest } = this.props;

        this.connSectionWidth = 0;
        let middleWidth = (numCols * 5) + "mm";
        let Logo = (fullWidthLogo === true) ? PhoenixBrand : PhoenixP;
        let tChildren = []; //top row children
        let bChildren = []; //bottom row children
        //iterate over children and map to the appropriate children container array
        const foldPoint = ((this.numConnectors - 1) / 2) + 1;
        React.Children.map(children, (child, index) => {
            //if top row (2f/2h) exists, and element is not the power connector (element 0)
            if (hasTopRow && (index >= foldPoint)) {
                const newProps = {
                    ...this.mapPropsToConnector(child, index),
                    style: {
                        transform: 'rotate(180deg)'
                    }
                }
                tChildren.push(React.cloneElement(child, newProps));
            } else {
                bChildren.push(React.cloneElement(child, this.mapPropsToConnector(child, index)));
            }
        })

        const moduleTopStyle = this.props.hasTopRow ? {
            width: this.faceWidth() + "mm",
            border: 'none',
            marginRight: '6mm',
            justifyContent: 'right'
        } : {
            width: this.faceWidth() + "mm"
        };

        return (<div className={styles.moduleBase} style={{ width: width + "mm", justifyContent: this.props.hasTopRow ? "center" : "flex-start" }} {...rest}>
            <div className={styles.moduleTop} style={moduleTopStyle}>
                {/* {hasTopRow ? (<VerticalPartLabel partName={partName} partNumber={partNumber}/>):(null)} */}
                {((raisedMidsection || hasTopRow) === false) ?
                    (<div className={styles.raisedContainer} style={{ width: this.faceWidth() + "mm" }}>
                        <Vents width={width} upper={true} />
                        <Label width={this.faceWidth() - 4 + 1} labels={labels} />
                        <LabelHolder>
                        </LabelHolder>
                        <div className={styles.brandArea}>
                            <div className={styles.logo}>
                                <Logo />
                            </div>
                            {/* <img className={styles.logo} src={logo} alt="Phoenix Contact"/> */}
                            <div className={styles.printArea}>
                                <div className={styles.print}>{partName}</div>
                                <div className={styles.print}>{partNumber}</div>
                            </div>
                        </div>
                        <Vents width={width} lower={true} />
                    </div>) : (<>{tChildren}</>)}
            </div>
            <div className={styles.moduleMiddle} style={{ width: this.connSectionWidth + 'mm' }}>
                <AxlColorID {...colorCard} />
                <Inset />
            </div>
            <div className={styles.moduleBottom}>
                {bChildren}
            </div>
        </div>)
    }
}

AxlModule.propTypes = {
    raisedMidsection: PropTypes.bool.isRequired,          //does the card have a raised midsection
    hasTopRow: PropTypes.bool.isRequired,          //do the connectors appear at the top of the module
    width: PropTypes.number.isRequired,        //width in mm of the card
    colorCard: PropTypes.object.isRequired,        //properties to pass to colorID card
    partNumber: PropTypes.string.isRequired,        //part number of the module
    partName: PropTypes.string.isRequired,        //name of the product as displayed on the physical unit
    fullWidthLogo: PropTypes.bool,                     //should show full width phoenix contact logo
    moduleName: PropTypes.string,                   //name of the module e.g. AI8,DO8, etc
}

AxlModule.defaultProps = {
    labels: ['a', '0', '1', '2', '3', '4', '5', '6', '7']
}

function VerticalPartLabel({ partName, partNumber}) {
    let Logo = PhoenixBrand;
    return (<div className={styles.brandAreaVertical}>
        <div className={styles.logoVertical}>
            <Logo />
        </div>
        {/* <img className={styles.logo} src={logo} alt="Phoenix Contact"/> */}
        <div className={styles.printAreaVertical}>
            <div className={styles.print}>{partName}</div>
            <div className={styles.print}>{partNumber}</div>
        </div>
    </div>)
}

//takes a width of the component in mm and calculates the number of vents should be rendered
function Vents(props) {
    var vents = [];
    const numvents = Math.floor(props.width / 6);
    const ventContainerWidth = props.width - 1 + "mm";
    const ventClass = classNames({ [styles.ventLower]: (props.lower === true) }, { [styles.ventUpper]: (props.upper === true) })
    for (var i = 0; i < numvents; i++) {
        vents.push(<div key={'v' + i} className={ventClass}></div>)
    }

    return (<div className={styles.ventContainer} style={{ width: ventContainerWidth }}>
        {vents}
    </div>)
}


//54/45mm
function Label(props) {
    const labelWidth = props.width + "mm";
    const lineWidth = (props.width - 3) + "mm";
    const singleWidth = (10 * props.labels.length > props.width)
    const numVerticalLines = props.labels.length - 1;
    const labelVerticalClass = classNames([styles.labelVerticalLine], { [styles.singleWidthMargin]: singleWidth }, { [styles.doubleWidthMargin]: !singleWidth })
    var Columns = props.labels.map((label, index) => {
        if (index < props.labels.length) {
            var borderStyle, flex
            if (index === 0) {
                borderStyle = 'none';
                flex = '2';
            } else if (index === (props.labels.length - 1)) {
                flex = '2';
                borderStyle = '0.25mm solid black';
            } else {
                borderStyle = '0.25mm solid black';
                flex = '1';
            }
            return (<div className={labelVerticalClass} key={'lbl' + index} style={{ borderLeft: borderStyle, flexGrow: flex }}>
                <span className={styles.labelText}>{label}</span>
            </div>)
        }
    });
    return (
        <div className={styles.labelBase} style={{ width: labelWidth }}>
            <div className={styles.labelHorizontalLine} style={{ width: lineWidth }}></div>
            {Columns}
        </div>
    )
}

function Inset(props) {
    //const insetWidth = props.width + "mm";
    return (
        <div className={styles.inset}></div>
    )
}

function LabelHolder(props) {
    return (<div className={styles.labelHolder}>
        {props.children}
    </div>)
}

export function defaultTerminals(numTerminals) {
    var vals = [];
    for (var k = 0; k < numTerminals; k++) {
        vals.push({});
    }
    return vals
    //[{label:'00'},{label:'10'},{label:'20'},{label:'30'}]
}

export function defaultLeds(numLeds) {
    var vals = [];
    for (var i = 0; i < numLeds; i++) {
        vals.push({})
    }
    return vals
}