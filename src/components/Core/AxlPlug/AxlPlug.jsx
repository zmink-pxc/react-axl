import React from 'react';
import styles from '@bit/zmink.axioline.axl-plugmodule';
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