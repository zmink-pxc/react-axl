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
            foregroundElements.push(<div></div>)
        }
        for (var i=0;i<this.props.numBackgroundElements;i++){
            backgroundElements.push(<div></div>)
        }

        return (<div className={this.props.className} style={{backgroundColor: styles.backgroundDark,width:'200px',height:'200px',...this.props.style}}>
            <div className="foreground">
                {foregroundElements}
            </div>
            <div className="background">
                {backgroundElements}
            </div>
        </div>)
    }
}
