import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AxioBus.module.scss';
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

        //this._context = context;
    }

    

    render(){
        let bus = this.props.busConfiguration.map((key)=>{
            return Devices[key]
        });

        return <div className={styles.base}>
            {bus}
        </div>
    }
}


AxioBus.propTypes = {
    busConfiguration:     PropTypes.arrayOf(PropTypes.string),
    height:               PropTypes.any,
    width:                PropTypes.any,
    partHeight:           PropTypes.any
}