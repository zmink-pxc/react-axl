import React from 'react';
import SeTerminalGroup from '@bit/zmink.axioline.smart-elements.se-terminal-group';
import styles from './SeConnector.module.scss';

export default function SeConnector(props){
    return (<div className={styles.root}>
        <div className={styles.shadow}></div>
        <SeTerminalGroup key='tg-1' left={true} />
        <SeTerminalGroup key='tg-2' />
        <SeTerminalGroup key='tg-3' left={true} />
        <SeTerminalGroup key='tg-4' />
        <SeTerminalGroup key='tg-5' left={true} />
        <SeTerminalGroup key='tg-6' />
        <SeTerminalGroup key='tg-7' left={true} />
        <SeTerminalGroup key='tg-8' />
    </div>)
}