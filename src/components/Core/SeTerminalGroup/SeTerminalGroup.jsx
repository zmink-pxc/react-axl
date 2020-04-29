import React from 'react';
import SeTerminal from '@core/SeTerminal/SeTerminal.jsx';
import SePlunger from '@core/SePlunger/SePlunger.jsx';
import PropTypes from 'prop-types';
import styles from './SeTerminalGroup.module.scss';

export default function SeTerminalGroup(props){

    return props.left ? (<div className={styles.root}>
        <SeTerminal  {...props.terminal} isLeft={true}/><div style={{width: '0.5mm'}}/><SePlunger {...props.plunger}/>
    </div>):(<div className={styles.root}>
        <div style={{width: '0.5mm'}}/><SePlunger {...props.plunger}/><div style={{width: '0.5mm'}}/><SeTerminal  {...props.terminal} isLeft={false}/>
    </div>)
}

SeTerminalGroup.propTypes = {
    terminal: PropTypes.object, //props sent to terminal 
    plunger:  PropTypes.object  //props sent to plunger
}