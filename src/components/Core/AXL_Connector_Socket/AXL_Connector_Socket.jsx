import React from 'react';
import classNames from 'classnames';
import styles from './AXL_Connector_Socket.module.scss'
import AXL_LED_Socket from '../AXL_LED_Socket/AXL_LED_Socket.jsx';
import AXL_Plug from '../AXL_Plug/AXL_Plug.jsx';

export default class AXL_Connector_Socket extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){

        const rows = Array.apply(null,Array(this.props.numRows));
        const cols = Array.apply(null,Array(this.props.numCols));
        const rootStyle = classNames([styles.rootContainer],{[styles.singleCol]:(this.props.numCols ===1)},{[styles.twoCol]:(this.props.numCols === 2)})
        //const connectorStyle = classNames(styles.connector,{[styles.blackConnector]: this.props.isBlack})

        return (<div className={rootStyle}>
             <AXL_LED_Socket numRows={this.props.numRows} numCols={this.props.numCols}/>
             {rows.map((row,index)=>{
                 return (<div key={'pg-'+index} className={styles.plugGroup}>
                    {cols.map((col,index)=>{
                        return (<AXL_Plug key={'p-'+index}/>)
                    })}
                 </div>)
             })}
         </div>)
    }
}