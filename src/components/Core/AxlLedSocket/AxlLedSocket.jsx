import React from 'react';
import classNames from 'classnames';
import styles from './AxlLedSocket.module.scss'
import { getStorybook } from '@storybook/react';

export default class AxlLedSocket extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        const width = this.props.numCols * 4 + "mm";
        const height = this.props.numRows * 3 + "mm";
        const s = {...baseStyle,width:width,height:height,marginLeft:'1mm',marginRight:'1mm',marginTop:'1mm'}
        return (<div style={s}>
                 
               </div>)
    }
}

const baseStyle = {
    backgroundColor: '#bcb7b7',
    boxShadow: 'rgba(0, 0, 0, 0.6) 0px 0px 3mm 0px inset'
}