import React from 'react';
import classNames from 'classnames';
import styles from './AXL_Terminal.module.css'

export default class AXL_Terminal extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        return (<div className={styles.edge}>
                    <div className={styles.inset}>
                        <div className={styles.center_circle}>
                            <div className={styles.terminal_center}></div>
                        </div>
                    </div>
                </div>)
        
    }
}