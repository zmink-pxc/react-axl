import React from 'react';
import classNames from 'classnames';
import styles from './AXL_ColorID.module.css'

export default class AXL_ColorID extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        const colorClass = classNames([styles.cardBase],{[styles.digitalIn]:this.props.isDigitalIn},{[styles.digitalOut]:this.props.isDigitalOut},
        {[styles.analogIn]:this.props.isAnalogIn},{[styles.analogOut]:this.props.isAnalogOut},{[styles.specialFn]:this.props.isSpecialFn},{[styles.pwr]:this.props.isPwr});
        return <div className={colorClass}></div>
    }
}

AXL_ColorID.defaultProps = {
    isDigitalOut: true
}