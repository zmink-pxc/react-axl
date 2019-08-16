import React from 'react';
import classNames from 'classnames';
import styles from './AXL_Terminal.module.css'

export default class AXL_Terminal extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        const insetClass = classNames(styles.inset,{[styles.inset_end]:this.props.isEnd})
        const edgeClass = classNames(styles.edge,{[styles.edge_end]:this.props.isEnd})
        const coverClass = classNames(styles.blackCover,{[styles.blackCover_end]:this.props.isEnd})
        if (this.props.isBlack === true){
            return (
                <div className={styles.container}>
                    <div className={edgeClass}>
                    <div className={insetClass}>
                        <div className={styles.center_circle}>
                            <div className={styles.terminal_center}></div>
                        </div>
                    </div>
                    </div>
                <div className={coverClass}></div>
                </div>         
            )
        }else{
            return (<div className={styles.container}>
                <div className={edgeClass}>
                    <div className={insetClass}>
                        <div className={styles.center_circle}>
                            <div className={styles.terminal_center}></div>
                        </div>
                    </div>
                </div>
            </div>
           )
        }        
    }
}