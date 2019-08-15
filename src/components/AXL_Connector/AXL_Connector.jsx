import React from 'react';
import classNames from 'classnames';
import styles from './AXL_Connector.module.css';
import AXL_LED_Group from '../AXL_LED_Group/AXL_LED_Group.jsx';
import AXL_Terminal_Group from '../AXL_TerminalGroup/AXL_TerminalGroup.jsx';


export default class AXL_Connector extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {

        const cols = Array.apply(null,Array(this.props.numCols));

        return (
            <div className={styles.connector}>
                {
                    cols.map((col,index)=>{
                        var j = this.props.numRows * index;
                        return (<div className={styles.col}>
                        <AXL_LED_Group leds={this.props.leds.slice(j,j+this.props.numRows)}/>
                        {this.props.terminals.slice(j,j+this.props.numRows).map((terminal,row)=>{
                            return <AXL_Terminal_Group key={'terminal-'+row+'-'+index} {...terminal}/>
                        })}
                        </div>)
                    })
                }
            </div>
        )
    }
}

AXL_Connector.defaultProps = {
    numRows: 4,
    numCols: 1,
    terminals: [{label:'00'},{label:'10'},{label:'20'},{label:'30'}],
    leds: [{isWarning: true,label:'00'},{isError: true,label:'10'},{isActive: true,label:'20'},{isWarning: true,label:'30'}]
}