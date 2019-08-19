import React from 'react';
import styles from "./PLCNextBackground.module.scss";

export default class PLCNextBackground extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        const foregroundElements = [];
        const backgroundElements = [];
        for (var i=0;i<this.props.numForegroundElements;i++){
            foregroundElements.push(<div className={styles["foreground-element-"+i]}></div>)
        }
        for (var i=0;i<this.props.numBackgroundElements;i++){
            backgroundElements.push(<div className={styles["background-element-"+i]}></div>)
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
