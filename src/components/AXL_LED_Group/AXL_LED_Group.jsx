import React from 'react';
import classNames from 'classnames';
import styles from './AXL_LED_Group.module.css';
import AXL_LED from '../AXL_LED/AXL_LED.jsx';

export default class AXL_LED_Group extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){

        return (<div className={styles.rootContainer}>
                {
                 this.props.leds.map((led,index)=>{
                     var {label,...rest} = {...led};
                     return (<div className={styles.row} key={'lr'+index}>
                         <div className={styles.ledContainer}>
                            <AXL_LED {...rest}/> 
                         </div>
                        <div className={styles.labelContainer}>
                            <div className={styles.label}>
                                {label}
                            </div>
                        </div>
                     </div>)
                     
                 })    
                }
                </div>)
    }
}

AXL_LED_Group.defaultProps = {
    leds: [{isWarning: true,label:'00'},{isError: true,label:'10'},{isActive: true,label:'20'},{isWarning: true,label:'30'}]
}