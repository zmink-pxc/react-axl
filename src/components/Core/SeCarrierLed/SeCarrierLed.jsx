import React from 'react';
import classNames from 'classnames';
import styles from '@bit/zmink.axioline.smart-elements.se-carrier-led-module';

export default function SeCarrierLed (){
    const ledClass = classNames(styles.led_base,{[styles.error]:this.props.isError},{[styles.warning]:this.props.isWarning},{[styles.active]:this.props.isActive})
    return (<div className={ledClass}>
        </div>)
}

//isError
//isWarning
//isActive