import {ReactComponent as LED} from '../../protocol-icons/icons/devices/svg/axlLED.svg'
import React from 'react';

export class AXL_LED extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        return <LED></LED>
    }
}