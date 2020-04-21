import React from 'react';
import styles from './AxioLoader.module.scss';
import classNames from 'classnames';


/**
 * 
 * @param {*} props 
 */
export default function AxioLoader(props){

    return <div className={styles.base} style={{height: '122mm',width: props.mmWidth}}></div>
}