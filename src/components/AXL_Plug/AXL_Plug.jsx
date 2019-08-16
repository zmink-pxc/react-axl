import React from 'react';
import classNames from 'classnames';
import styles from './AXL_Plug.module.css'

export default class AXL_Plug extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        return (<div className={styles.receptacle}>
            <div className={styles.pin}></div>
        </div>)
    }
}