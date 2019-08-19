import React from 'react';
import classNames from 'classnames';
import styles from './AXL_Module.module.css'
import PropTypes from 'prop-types';
import AXL_ColorID from '../AXL_ColorID/AXL_ColorID.jsx';

export default class AXL_Module extends React.PureComponent {
    constructor(props){
        super(props)
    }

    faceWidth = () => {
        return Math.floor(this.props.width/10) * 10;
    }



    withMM = (num)=>{
        return num + "mm";
    }

    render(){

        return (<div className={styles.moduleBase} style={{width: this.props.width+"mm"}}>
            <div className={styles.moduleTop} style={{width: this.faceWidth()+"mm"}}>
                {((this.props.raisedMidSection || this.props.hasTopRow)===false) ? 
                (<div className={styles.raisedContainer} style={{width: this.faceWidth()+"mm"}}>
                    <Vents width={this.props.width} upper={true}/>
                    <Label width={this.faceWidth()-4+1} labels={this.props.labels}/>
                    <LabelHolder>
                    </LabelHolder>
                    <div className={styles.brandArea}></div>
                    <Vents width={this.props.width} lower={true}/>
                </div>):(null)}
            </div>
            <div className={styles.moduleMiddle}>
                <AXL_ColorID {...this.props.colorCard}/>
                <Inset width={this.faceWidth()-5}/>
            </div>
            <div className={styles.moduleBottom}>

            </div>
        </div>)
    }
}

AXL_Module.propTypes = {
 raisedMidsection: PropTypes.bool,      //does the card have a raised midsection
 hasTopRow:     PropTypes.bool,         //do the connectors appear at the top of the module
 width:         PropTypes.number,       //width in mm of the card
 colorCard:     PropTypes.object,       //properties to pass to colorID card
 partNumber:    PropTypes.number,       //part number of the module
 fullWidthLogo: PropTypes.bool,         //should show full width phoenix contact logo
 moduleName:    PropTypes.string,       //name of the module e.g. AI8,DO8, etc
}

AXL_Module.defaultProps = {
    labels: ['a','0','1','2','3','4','5','6','7']
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
    const labelWidth = props.width + "mm";
    const lineWidth = (props.width - 3) + "mm";
    const singleWidth = ( 10 * props.labels.length > props.width)
    const numVerticalLines = props.labels.length - 1;
    const labelVerticalClass = classNames([styles.labelVerticalLine],{[styles.singleWidthMargin]:singleWidth},{[styles.doubleWidthMargin]:!singleWidth})
    var Columns = props.labels.map((label,index)=>{
        if (index < props.labels.length){
            var borderStyle,flex
            if (index === 0){
                borderStyle='none';
                flex = '2';
            }else if(index === (props.labels.length - 1)){
                flex = '2';
                borderStyle = '0.25mm solid black';
            }else{
                borderStyle = '0.25mm solid black';
                flex = '1';
            }
            return (<div className={labelVerticalClass} style={{borderLeft: borderStyle,flexGrow:flex}}>
                <span className={styles.labelText}>{label}</span>
            </div>)
        }
    });
    return (
        <div className={styles.labelBase} style={{width: labelWidth}}>
            <div className={styles.labelHorizontalLine} style={{width:lineWidth}}></div>
            {Columns}
        </div>
    )
}

function Inset(props){
    const insetWidth = props.width + "mm";
    return (
        <div className={styles.inset} style={{width: insetWidth}}></div>
    )
}

function LabelHolder(props){
    return (<div className={styles.labelHolder}>
        {props.children}
    </div>)
}