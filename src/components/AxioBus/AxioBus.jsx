import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Modules from '../Modules/load-modules.js';
import Controllers from '../Controllers/load-controllers.js';

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
        console.log(Devices);

        return <div></div>
    }
}


AxioBus.propTypes = {
    busConfigPartNumbers: PropTypes.arrayOf(PropTypes.string),
    busConfigPartNames:   PropTypes.arrayOf(PropTypes.string),
    height:               PropTypes.any,
    width:                PropTypes.any,
    partHeight:           PropTypes.any
}