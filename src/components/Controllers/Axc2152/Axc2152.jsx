import React from 'react';
import classNames from 'classnames';
import styles from './Axc2152.module.scss';
import PropTypes from 'prop-types';
import Connector from '../../Core/AxlConnector/AxlConnector.jsx';
//import phoenixP from '../../../assets/phoenix-p.svg'
// import bottomCard from './assets/bottomCard.svg';
// import topCard from './assets/topCard.svg';
import AxlLedHorizontal from '../../Core/AxlLedHorizontal/AxlLedHorizontal.jsx';
import PhoenixP from '../../Core/PhoenixP/PhoenixP.jsx';
import TopCard from '../../Core/TopCard/TopCard.jsx';
import BottomCard from '../../Core/BottomCard/BottomCard.jsx';


export default class Axc2152 extends React.PureComponent {
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
                    <div className={styles.card}>
                        <TopCard/>
                    </div>
                    {/* <img className={styles.card} src={topCard}></img> */}
                </CardHolder>
                {/*<div className={styles.verticalText}>www.plcnext-community.net</div>*/}
            </div>
            <div className={styles.mid}>
                <DiagLeds />
                {/* <img className={styles.logo} src={phoenixP}/> */}
                <div className={styles.logo}>
                    <PhoenixP/>
                </div>
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
                        <div className={styles.card}>
                            <BottomCard/>
                        </div>
                        {/* <img className={styles.card} src={bottomCard}></img> */}
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

    

    return (
    <div className={styles.ledArea}>
        <div className={styles.ledTextGroup} style={{textAlign:'right'}}>
            <div>BF-C</div>
            <div>BF-D</div>
            <div>SF</div>
            <div>BOOT</div>
            <div>EXT</div>
        </div>
        <div className={styles.ledContainer}>
            <div className={styles.ledGroup}>
                <AxlLedHorizontal />
                <AxlLedHorizontal />
                <AxlLedHorizontal />
                <AxlLedHorizontal />
                <AxlLedHorizontal />
            </div>
            <div className={styles.ledGroup}>
                <AxlLedHorizontal />
                <AxlLedHorizontal />
                <AxlLedHorizontal />
                <AxlLedHorizontal />
                <AxlLedHorizontal />
            </div>
        </div>
        <div className={styles.ledTextGroup} style={{textAlign:'left'}}>
            <div>RUN</div>
            <div>FAIL</div>
            <div>DBG</div>
            <div>D</div>
            <div>E</div>
        </div>
    </div>
    
    )
}

Axc2152.defaultProps = {
    partNumber: '2404267',
    partName:   'AXC F 2152',
    mmWidth:    45,             //width of component in mm which can be converted to px size
    mmHeight:   122          
}