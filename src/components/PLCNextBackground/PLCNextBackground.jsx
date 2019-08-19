import React from 'react';
import styles from "./PLCNextBackground.module.scss";
import classNames from 'classnames';

export default class PLCNextBackground extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        const foregroundElements = [];
        const backgroundElements = [];
        for (var i=0;i<this.props.numForegroundElements;i++){
            const feClass = classNames(styles["foreground-element-"+i],styles.foregroundMove)
            foregroundElements.push(<div className={feClass}></div>)
        }
        for (var i=0;i<this.props.numBackgroundElements;i++){
            const bgClass = classNames(styles["background-element-"+i],styles.backgroundMove)
            backgroundElements.push(<div className={bgClass}></div>)
        }

        return (<div className={this.props.className} style={{backgroundColor: styles.backgroundDark,width:'100vw',height:'100vh',...this.props.style}}>
            <div className={styles.foreground}>
                {foregroundElements}
            </div>
            <div className={styles.background}>
                {backgroundElements}
            </div>
        </div>)
    }
}
