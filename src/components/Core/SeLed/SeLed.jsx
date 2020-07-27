import React from 'react';
import classNames from 'classnames';
import styles from '@bit/zmink.axioline.smart-elements.se-led-module';

export default class SeLed extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        const ledClass = classNames(styles.led_base,{[styles.error]:this.props.isError},{[styles.warning]:this.props.isWarning},{[styles.active]:this.props.isActive},{[styles.errLed]:this.props.isErrLed})
        return (<div className={ledClass}>
            </div>)
        
    }
}

//isError
//isWarning
//isActive