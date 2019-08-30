import React from 'react';
import classNames from 'classnames';
import styles from './AXL_2152.module.scss';
import PropTypes from 'prop-types';
import Connector from '../../AXL_Connector/AXL_Connector.jsx';
import phoenixP from './phoenix-p.png';
import bottomCard from './bottomCard.png';
import topCard from './topCard.png';
import AXL_LED_Horizontal from '../../AXL_LED_Horizontal/AXL_LED_Horizontal.jsx';


export default class AXL_2152 extends React.PureComponent {
    constructor(props){
        super(props)

    }

    render(){

        return (<div className={styles.base} {...this.props}>
             <Vents width={39} upper={true}/>
            <div className={styles.top}>{/*
            <div className={styles.verticalTextContainer}>
                    <div className={styles.verticalText}>Ord.No. 2404267  AXC F 2152</div>
                    <div className={styles.barcodeContainer}>BARCODE</div>
                    <div className={styles.verticalText}>MAC Addr.: 00.A0.45.A0.82.BF</div>
                </div>
            */}                
                <CardHolder up={true}>
                    <img className={styles.card} src={topCard}></img>
                </CardHolder>
                {/*<div className={styles.verticalText}>www.plcnext-community.net</div>*/}
            </div>
            <div className={styles.mid}>
                <DiagLeds />
                <img className={styles.logo} src={phoenixP}/>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomLeft}>
                    <div className={styles.powerMarker}></div>
                    <div className={styles.connectorPosition}>
                        <Connector type="POWER" isBlack={true} numRows={2} numCols={2} terminals={[{redPlunger: true,label:'a1'},{redPlunger: true,label:'a2'},{bluePlunger:true,label:'b1'},{bluePlunger:true,label:'b2'}]}/>
                    </div>
                </div>
                <div className={styles.bottomRight}>
                    <CardHolder down={true}>
                        <img className={styles.card} src={bottomCard}></img>
                    </CardHolder>
                </div>
            </div>
        </div>)
    }
}

//takes a width of the component in mm and calculates the number of vents should be rendered
function Vents(props){
    var vents = [];
    const numvents = Math.floor(props.width/5);
    const ventContainerWidth = props.width + 'mm';
    const ventClass = classNames({[styles.ventLower]:(props.lower===true)},{[styles.ventUpper]:(props.upper===true)})
    for (var i=0;i<numvents;i++){
        vents.push(<div key={'v'+i} className={ventClass}></div>) 
    }

    return (<div className={styles.ventContainer} style={{width:ventContainerWidth}}>
        {vents}
    </div>)
}

function CardHolder(props){
    const cardholderClass = classNames(styles.cardHolder,{[styles.cardHolderUp]:props.up},{[styles.cardHolderDown]:props.down})
    const leftFlangeClass = classNames(styles.cardHolderFlange,styles.cardHolderFlangeLeft);
    const rightFlangeClass = classNames(styles.cardHolderFlange,styles.cardHolderFlangeRight);

    return <div className={cardholderClass}>
        <div className={leftFlangeClass}></div>
            {props.children}
        <div className={rightFlangeClass}></div>
    </div>
}

function DiagLeds(props){
    return <div className={styles.ledContainer}>
        <div className={styles.ledGroup}>
            <AXL_LED_Horizontal />
            <AXL_LED_Horizontal />
            <AXL_LED_Horizontal />
            <AXL_LED_Horizontal />
            <AXL_LED_Horizontal />
        </div>
        <div className={styles.ledGroup}>
            <AXL_LED_Horizontal />
            <AXL_LED_Horizontal />
            <AXL_LED_Horizontal />
            <AXL_LED_Horizontal />
            <AXL_LED_Horizontal />
        </div>
    </div>
}

AXL_2152.defaultProps = {
    partNumber: '2404267',
    partName: 'AXC F 2152'
}