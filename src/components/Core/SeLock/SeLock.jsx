import React from 'react';
import classNames from 'classnames';
import styles from './SeLock.module.scss'

export default function SeLock(){
    return (<div className={styles.root}>
        <div className={styles.indent}></div>
        <div className={styles.indent}></div>
    </div>) 
}