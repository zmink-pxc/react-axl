import React, {Suspense} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AxioBus.module.scss';
import {StaggeredMotion,spring} from 'react-motion';
import { AxioBusScale } from '@utils/Scale.jsx';
import AxioLoader from '@utils/AxioLoader/AxioLoader.jsx';
import Modules from '@modules/load-modules.js';
import Controllers from '@controllers/load-controllers.js';

const Devices = Object.assign({},Controllers,Modules);

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
        let bus = this.props.busConfiguration.map((key,index)=>{
            const Device = Devices[key].component;
            const deviceProps = this.props.busProps ? (this.props.busProps.slice()[index]):(null)
            return (<Suspense key={`s${key}`}fallback={<AxioLoader key={`l${key}`} mmWidth={Devices[key].width}/>}><Device key={`c${key}`} {...deviceProps}/></Suspense>)
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
    busProps:             PropTypes.arrayOf(PropTypes.object),
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