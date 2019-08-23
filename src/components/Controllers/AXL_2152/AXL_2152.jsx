import React from 'react';
import classNames from 'classnames';
import styles from './AXL_2152.module.scss';
import PropTypes from 'prop-types';
import Connector from '../../AXL_Connector/AXL_Connector';


export default class AXL_2152 extends React.PureComponent {
    constructor(props){
        super(props)

    }

    render(){

        return (<div className={styles.base}>
             <Vents width={39} upper={true}/>
            <div className={styles.top}></div>
            <div className={styles.mid}></div>
            <div className={styles.bottom}>
                <div className={styles.bottomLeft}>
                    <Connector type="POWER" isBlack={true} numRows={2} numCols={2}/>
                </div>
                <div className={styles.bottomRight}>

                </div>
            </div>
        </div>)
    }
}

//takes a width of the component in mm and calculates the number of vents should be rendered
function Vents(props){
    var vents = [];
    const numvents = Math.floor(props.width/5);
    const ventContainerWidth = props.width + 'mm';
    const ventClass = classNames({[styles.ventLower]:(props.lower===true)},{[styles.ventUpper]:(props.upper===true)})
    for (var i=0;i<numvents;i++){
        vents.push(<div key={'v'+i} className={ventClass}></div>) 
    }

    return (<div className={styles.ventContainer} style={{width:ventContainerWidth}}>
        {vents}
    </div>)
}