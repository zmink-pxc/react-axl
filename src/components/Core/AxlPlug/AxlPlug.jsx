import React from 'react';
import styles from './AxlPlug.module.scss';
export default class AxlPlug extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        return (<div className={styles.receptacle}>
            <div className={styles.pin}></div>
        </div>)
    }
}