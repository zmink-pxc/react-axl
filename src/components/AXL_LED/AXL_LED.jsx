import React from 'react';
import classNames from 'classnames';
import styles from './AXL_LED.module.scss'

export default class AXL_LED extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        const ledClass = classNames(styles.led_base,{[styles.error]:this.props.isError},{[styles.warning]:this.props.isWarning},{[styles.active]:this.props.isActive})
        return (<div className={ledClass}>
            </div>)
        
    }
}

//isError
//isWarning
//isActive