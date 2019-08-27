import React from 'react';
import classNames from 'classnames';
import styles from './AXL_Latch.module.scss'

export default class AXL_Latch extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        const topClass = classNames([styles.top],[styles.orange],{[styles.topPushedIn]:this.props.pushedIn});
        const midClass = classNames([styles.mid],[styles.orange]);
        const bottomClass = classNames([styles.bottom],[styles.orange]);
        const mountClass = classNames([styles.mount],{[styles.mountPushedIn]:this.props.pushedIn})
        return (<div>
                 <div className={topClass}>
                     <div className={mountClass}></div>
                 </div>
                 <div className={midClass}></div>
                 <div className={bottomClass}></div>
                </div>)
    }
}