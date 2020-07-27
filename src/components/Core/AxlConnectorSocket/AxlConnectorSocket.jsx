import React from 'react';
import classNames from 'classnames';
import styles from '@bit/zmink.axioline.axl-connector-socketmodule';
import AxlLedSocket from '@bit/zmink.axioline.axl-led-socket';
import AxlPlug from '@bit/zmink.axioline.axl-plug';

export default class AxlConnectorSocket extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){

        const rows = Array.apply(null,Array(this.props.numRows));
        const cols = Array.apply(null,Array(this.props.numCols));
        const rootStyle = classNames([styles.rootContainer],{[styles.singleCol]:(this.props.numCols ===1)},{[styles.twoCol]:(this.props.numCols === 2)})
        //const connectorStyle = classNames(styles.connector,{[styles.blackConnector]: this.props.isBlack})

        return (<div className={rootStyle}>
             <AxlLedSocket numRows={this.props.numRows} numCols={this.props.numCols}/>
             {rows.map((row,index)=>{
                 return (<div key={'pg-'+index} className={styles.plugGroup}>
                    {cols.map((col,index)=>{
                        return (<AxlPlug key={'p-'+index}/>)
                    })}
                 </div>)
             })}
         </div>)
    }
}