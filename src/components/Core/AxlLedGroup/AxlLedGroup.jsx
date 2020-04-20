import React from 'react';
import classNames from 'classnames';
import styles from './AxlLedGroup.module.scss';
import AxlLed from '../AxlLed/AxlLed.jsx';

export default class AxlLedGroup extends React.PureComponent {
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
                            <AxlLed {...rest}/> 
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

AxlLedGroup.defaultProps = {
    leds: [{isWarning: true,label:'00'},{isError: true,label:'10'},{isActive: true,label:'20'},{isWarning: true,label:'30'}]
}