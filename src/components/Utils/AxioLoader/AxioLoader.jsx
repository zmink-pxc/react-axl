import React from 'react';
import styles from './AxioLoader.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';


/**
 * 
 * @param {*} props 
 */
export default function AxioLoader(props){
    const mm = props.mmWidth + "mm";
    return <div style={{backgroundColor: '#8e9291',height: '122mm',width: mm,padding: '5mm 5mm'}}>
        <div className={styles.skeletonBox} style={{height: '57mm',width: '100%'}}></div>
        <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',marginTop:'1mm',marginBottom:'2mm'}}>
            <div className={styles.skeletonBox} style={{height: '5mm',width: '10mm'}}></div><div className={styles.skeletonBox} style={{height: '5mm',width: '22mm'}}></div>
        </div>
        <div className={styles.skeletonBox} style={{height: '56mm',width: '100%'}}></div>
    </div>
}

AxioLoader.propTypes = {
    mmWidth:     PropTypes.number.isRequired,       //width in mm of the component
}