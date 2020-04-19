import React from 'react';
import classNames from 'classnames';
import styles from './AXL_Plunger.module.scss'

export default class AXL_Plunger extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        const plungerClass = classNames(styles.plunger_base,{[styles.red]:this.props.red},{[styles.green]:this.props.green},{[styles.blue]:this.props.blue},{[styles.pushed_in]:this.props.pushIn})
        return (<div className={plungerClass}>
                <div className={styles.middle}></div>
            </div>)
        
    }
}