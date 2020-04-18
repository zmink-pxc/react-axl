import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AxioBus.module.scss';
import {StaggeredMotion,spring} from 'react-motion';
import { AxioBusScale } from '../Utils/Scale';
const Modules = require('../Modules/load-modules.js').default;
const Controllers = require('../Controllers/load-controllers.js').default;

const Devices = Object.assign({},Modules,Controllers);

// function requireAll(r) {
//      r.keys().forEach((key)=>{console.log('New key: ' + key)})
// }

// const context = requireAll(require.context('../Modules/', true, /\.js$/));

//console.log('modules: ' + JSON.stringify(modules));

//const deviceDictionary = Object.assign({},modules,controllers);

export default class AxioBus extends React.Component {
    constructor(props){
        super(props);

        //this.deviceDictionary = deviceDictionary;

        this.defaultStyles = this.props.busConfiguration.map((key)=>{
            return {y:1000}
        })
    }

    

    render(){
        let bus = this.props.busConfiguration.map((key)=>{
            const Device = Devices[key];
            return <Device key={key}/>
        });

        const containerClass = classNames([styles.base],{[styles.wrap]:this.props.wrap})

        return (
                <div className={containerClass}>
                {/* <StaggeredMotion
                defaultStyles={this.defaultStyles}
                styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                    return i === 0
                    ? {y: spring(0)}
                    : {y: spring(prevInterpolatedStyles[i - 1].y)}
                })}
                >
                {interpolatingStyles =>
                <div className={styles.base}>
                {interpolatingStyles.map((style, i) => {
                    const Device = Devices[this.props.busConfiguration[i]];
                    return <Device key={i} style={{top: style.y}} />})
                }
                </div>
                }
                </StaggeredMotion> */}
                <AxioBusScale>
                {bus} 
                </AxioBusScale>
                 
                </div>            
        )
    }
}


AxioBus.propTypes = {
    busConfiguration:     PropTypes.arrayOf(PropTypes.string),
    height:               PropTypes.any,
    width:                PropTypes.any,
    partHeight:           PropTypes.any,
    wrap:                 PropTypes.bool
}

AxioBus.defaultProps = {
    wrap: false
}