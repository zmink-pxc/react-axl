import React from 'react';
import styles from "./PLCnextBackground.module.scss";
import classNames from 'classnames';
import Particles from 'react-particles-js';
import particles from './particles.json';

export default class PLCnextBackground extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        particles.particles.color.value = [styles.colorPistachio,styles.colorNeptune,styles.colorDownriver,styles.colorWaterloo,styles.colorAlto]
        return <div>
            <Particles params={particles}/>
        </div>
    }
}
