import React from 'react';
import classNames from 'classnames';
import styles from './AXL_Terminal.module.css'

export default class AXL_Terminal extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        if (this.props.isBlack === true){
            return (
                <div className={styles.edge}>
                    <div className={styles.blackCover}>
                    </div>
                    <div className={styles.inset}>
                        <div className={styles.center_circle}>
                            <div className={styles.terminal_center}></div>
                        </div>
                    </div>
            </div>)
        }else{
            return (<div className={styles.edge}>
                <div className={styles.inset}>
                    <div className={styles.center_circle}>
                        <div className={styles.terminal_center}></div>
                    </div>
                </div>
            </div>)
        }        
    }
}