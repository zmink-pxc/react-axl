import React, {Suspense} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AxioBus.module.scss';
import {StaggeredMotion,spring} from 'react-motion';
import { AxioBusScale } from '../Utils/Scale.jsx';
import AxioLoader from '../Utils/AxioLoader/AxioLoader.jsx';
const Modules = require('../Modules/load-modules.js').default;
const Controllers = require('../Controllers/load-controllers.js').default;

const Devices = Object.assign({},Controllers,Modules);

// function requireAll(r) {
//      r.keys().forEach((key)=>{console.log('New key: ' + key)})
// }

// const context = requireAll(require.context('../Modules/', true, /\.js$/));

//console.log('modules: ' + JSON.stringify(modules));

//const deviceDictionary = Object.assign({},modules,controllers);

/**
 * Renders axiobus components configured via part numbers
 * 
 * @param {Array} busConfiguration Array of part numbers of devices to render
 */
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
            const Device = Devices[key].component;
            return (<Suspense fallback={<AxioLoader mmWidth={Devices[key].width}/>}><Device key={key}/></Suspense>)
        });

        const containerClass = classNames([styles.base],{[styles.wrap]:this.props.wrap},{[styles.flexLeft]:this.props.left===true})

        return (
                <AxioBusScale className={containerClass}>
                    {/* <div className={}> */}
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
                    
                        {bus}                  
                    {/* </div> */}
                </AxioBusScale>           
        )
    }
}


AxioBus.propTypes = {
    busConfiguration:     PropTypes.arrayOf(PropTypes.string),
    height:               PropTypes.any,
    width:                PropTypes.any,
    partHeight:           PropTypes.any,
    wrap:                 PropTypes.bool,
    left:                 PropTypes.bool
}

AxioBus.defaultProps = {
    wrap: false,
    left: false
}