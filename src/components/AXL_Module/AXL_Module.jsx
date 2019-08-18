import React from 'react';
import classNames from 'classnames';
import styles from './AXL_Module.module.css'
import PropTypes from 'prop-types';
import AXL_ColorID from '../AXL_ColorID/AXL_ColorID.jsx';

export default class AXL_Module extends React.PureComponent {
    constructor(props){
        super(props)
    }

    numConnectorsPer = () => {
        
    }

    render(){

        return (<div className={styles.moduleBase} style={{width: this.props.width+"mm"}}>
            <div className={styles.moduleTop}>
                {((this.props.raisedMidSection || this.props.hasTopRow)===false) ? 
                (<div className={styles.raisedContainer}>
                    <LabelHolder>
                    <Vents width={this.props.width} upper={true}/>
                    <Label width={this.props.width}/>
                    <Vents width={this.props.width} lower={true}/>
                    </LabelHolder>
                </div>):(null)}
            </div>
            <div className={styles.moduleMiddle}>
                <AXL_ColorID {...this.props.colorCard}/>
                <Inset width={this.props.width}/>
            </div>
            <div className={styles.moduleBottom}>

            </div>
        </div>)
    }
}

AXL_Module.propTypes = {
 raisedMidsection: PropTypes.bool,   //does the card have a raised midsection
 hasTopRow: PropTypes.bool,          //do the connectors appear at the top of the module
 width: PropTypes.number,               //width in mm of the card
 colorCard: PropTypes.object            //properties to pass to colorID card
}

//takes a width of the component in mm and calculates the number of vents should be rendered
function Vents(props){
    var vents = [];
    const numvents = Math.floor(props.width/6);
    const ventContainerWidth = props.width-1 + "mm";
    const ventClass = classNames({[styles.ventLower]:(props.lower===true)},{[styles.ventUpper]:(props.upper===true)})
    for (var i=0;i<numvents;i++){
        vents.push(<div className={ventClass}></div>) 
    }

    return (<div className={styles.ventContainer} style={{width:ventContainerWidth}}>
        {vents}
    </div>)
}


//54/45mm
function Label(props){
    const labelWidth = (props.width - 2) + "mm";
    const lineWidth = (props.width - 3) + "mm";
    const numVerticalLines = props.numLabels + 1;
    var verticalLines = [];
    for (var j=0;j<numVerticalLines;j++){
        verticalLines.push(<div className={styles.labelArea}></div>)
    }
    return (
        <div className={styles.labelBase} style={{width: labelWidth}}>
            <div className={styles.labelHorizontalLine} style={{width:lineWidth}}></div>
        </div>
    )
}

function Inset(props){
    const insetWidth = (props.width - 10 - 4) + "mm";
    return (
        <div className={styles.inset} style={{width: insetWidth}}></div>
    )
}

function LabelHolder(props){
    return (<div className={styles.labelHolder}></div>)
}