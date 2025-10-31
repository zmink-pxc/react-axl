import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './SeTerminal.module.scss';

export default class SeTerminal extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        const insetClass = classNames(styles.inset,{[styles.inset_end]:this.props.isLeft})
        const edgeClass = classNames(styles.edge,{[styles.edge_end]:this.props.isLeft})
        const coverClass = classNames(styles.blackCover,{[styles.blackCover_end]:this.props.isLeft})
        if (this.props.isBlack === true){
            return (
                <div className={styles.container}>
                    <div className={edgeClass}>
                    <div className={insetClass}>
                        <div className={styles.center_circle}>
                            <div className={styles.terminal_center}></div>
                        </div>
                    </div>
                    </div>
                <div className={coverClass}></div>
                </div>         
            )
        }else{
            return (<div className={styles.container}>
                <div className={edgeClass}>
                    <div className={insetClass}>
                        <div className={styles.center_circle}>
                            <div className={styles.terminal_center}></div>
                        </div>
                    </div>
                </div>
            </div>
           )
        }        
    }
}

SeTerminal.propTypes = {
    isLeft: PropTypes.bool.isRequired,   //is the terminal at the end of the connector - will show a carved out edge
    isBlack: PropTypes.bool             //should the connector be rendered as black    
}