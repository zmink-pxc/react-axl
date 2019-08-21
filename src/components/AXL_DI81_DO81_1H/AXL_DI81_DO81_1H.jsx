import React from 'react';
import AXL_Module from '../AXL_Module/AXL_Module.jsx';
import AXL_24VPower from '../AXL_24VPower/AXL_24VPower.jsx';
import AXL_Connector4x2 from '../AXL_Connector4x2/AXL_Connector4x2.jsx';


export default class AXL_DI81_DO81_1H extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <AXL_Module width={35} raisedMidsection={false} hasTopRow={false} partNumber="2701916" labels={['a','0','1','2','3']} colorCard={{isComboDigital:true}}>
            </AXL_Module>
        )
    }
}