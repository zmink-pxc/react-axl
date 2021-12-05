import React from 'react';
import styles from './AxioLoader.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';


/**
 * 
 * @param {*} props 
 */
export default function AxioLoader(props){
    const skeletonClass = props.disableAnimate ? styles.skeletonBoxPlain:styles.skeletonBox;
    const mm = props.mmWidth + "mm";
    return <div style={{backgroundColor: '#8e9291',height: '122mm',width: mm,padding: '5mm 5mm'}}>
        <div className={skeletonClass} style={{height: '57mm',width: '100%'}}></div>
        <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',marginTop:'1mm',marginBottom:'2mm'}}>
            <div className={skeletonClass} style={{height: '5mm',width: '10mm'}}></div><div className={skeletonClass} style={{height: '5mm',width: '22mm'}}></div>
        </div>
        <div className={skeletonClass} style={{height: '56mm',width: '100%'}}></div>
    </div>
}

AxioLoader.propTypes = {
    /**
     * Width in mm of the component
     */
    mmWidth:     PropTypes.number.isRequired,
    /**
     * Disable the animation and display flat grey boxes
     */
    disableAnimate: PropTypes.bool
}