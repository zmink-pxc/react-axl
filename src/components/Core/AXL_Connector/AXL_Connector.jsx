import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AXL_Connector.module.scss';
import AXL_LED_Group from '../AXL_LED_Group/AXL_LED_Group.jsx';
import AXL_Terminal_Group from '../AXL_TerminalGroup/AXL_TerminalGroup.jsx';
import AXL_Latch from '../AXL_Latch/AXL_Latch.jsx';


export default class AXL_Connector extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {

        const cols = Array.apply(null,Array(this.props.numCols));
        const rows = Array.apply(null,Array(this.props.numRows));
        const connectorStyle = classNames(styles.connector)
        const connectorMiddleStyle = classNames(styles['connector-middle'],{[styles.blackConnector]: this.props.isBlack})
        var terminals = (this.props.hasOwnProperty('terminals'))?(this.props.terminals):(initArray(placeholderTerminal,this.props.numRows*this.props.numCols))
        return (
            <div className={connectorStyle} style={{width:(this.props.numCols * 5)+'mm'}}>
                <Foot isBlack={this.props.isBlack}/>
                <div className={connectorMiddleStyle}>
                {
                    cols.map((col,coli)=>{
                        var j = this.props.numRows * coli;
                        var leds = (this.props.hasOwnProperty('leds'))?(this.props.leds.slice(j,j+this.props.numRows)):(initArray(placeholderLED,this.props.numRows))
                        // if (this.props.leds !== (this.props.numRows*this.props.numCols)){leds = }
                        
                        return (<div className={styles.col}>
                        <AXL_LED_Group leds={leds}/>
                        {rows.map((row,rowi)=>{
                            return <AXL_Terminal_Group key={'ter-'+rowi+'-'+coli} {...terminals[(coli*this.props.numRows+rowi)]} isBlack={(this.props.isBlack===true)} isEnd={(rowi === (this.props.numRows-1))}/>
                        })}
                        </div>)
                    })
                }
                </div>
            <AXL_Latch pushedIn={this.props.pushInLatch}/>
            </div>
        )
    }
}

AXL_Connector.propTypes = {
    pushInLatch: PropTypes.bool,                //push the latch in
    isBlack:     PropTypes.bool,                //is the connector black
    numRows:     PropTypes.number.isRequired,   //number of rows on the connector
    numCols:     PropTypes.number.isRequired,   //number of columns on the connector
    terminals:   PropTypes.array,               //hooks into terminal props if necessary
    leds:        PropTypes.array                //hooks into led props for animating and labeling purposes
}

// AXL_Connector.defaultProps = {
//     isBlack: true,
//     numRows: 4,
//     numCols: 1,
//     terminals: [{label:'00'},{label:'10'},{label:'20'},{label:'30'}],
//     leds: [{isWarning: true,label:'00'},{isError: true,label:'10'},{isActive: true,label:'20'},{isWarning: true,label:'30'}]
// }

const placeholderLED = {isError:true,label:'00'};
const placeholderTerminal = {label: '00'};


function initArray(initElement,length){
    var arr = Array.apply(null,Array(length));
    return arr.map((element)=>{
        return initElement
    })
}

function Foot(props){
    return <div className={styles.connectorFoot} style={{backgroundColor: (props.isBlack===true)?('black'):(styles.axiolineGrey)}}>
        <div className={styles.footTop}></div>
    </div>
}
