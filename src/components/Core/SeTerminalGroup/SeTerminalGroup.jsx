import React from 'react';
import SeTerminal from '@bit/zmink.axioline.smart-elements.se-terminal';
import SePlunger from '@bit/zmink.axioline.smart-elements.se-plunger';
import PropTypes from 'prop-types';
import styles from '@bit/zmink.axioline.smart-elements.se-terminal-group-module';

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