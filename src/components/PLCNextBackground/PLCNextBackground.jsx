import React from './node_modules/react';
import styles from "./PLCNextBackground.module.scss";
import classNames from './node_modules/classnames';
import Particles from './node_modules/react-particles-js';
import particles from './particles.json';

export default class PLCnextBackground extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        particles.particles.color.value = [styles.colorPistachio,styles.colorNeptune,styles.colorDownriver,styles.colorWaterloo,styles.colorAlto]
        return <div>
            <Particles params={particles}/>
            {/* <Particles params={particles2}/> */}
            {/* <Particles params={particles3}/> */}
        </div>
    }
    // render(){
    //     const foregroundElements = [];
    //     const backgroundElements = [];
    //     for (var i=0;i<this.props.numForegroundElements;i++){
    //         const cInd = i % styles.classCount;
    //         const feClass = classNames(styles["foreground-element-"+cInd],styles.foregroundMove)
    //         foregroundElements.push(<div className={feClass}></div>)
    //     }
    //     for (var i=0;i<this.props.numBackgroundElements;i++){
    //         const cInd = i % styles.classCount;
    //         const bgClass = classNames(styles["background-element-"+cInd],styles.backgroundMove)
    //         backgroundElements.push(<div className={bgClass}></div>)
    //     }

    //     return (<div className={this.props.className} style={{backgroundColor: styles.backgroundDark,width:'100vw',height:'100vh',...this.props.style}}>
    //         <div className={styles.foreground}>
    //             {foregroundElements}
    //         </div>
    //         <div className={styles.background}>
    //             {backgroundElements}
    //         </div>
    //     </div>)
    // }
}
