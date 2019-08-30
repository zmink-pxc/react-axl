import React from 'react';
import AXL_Module,{defaultTerminals,defaultLeds} from '../../../../AXL_Module/AXL_Module.jsx';
import AXL_Connector from '../../../../AXL_Connector/AXL_Connector.jsx';


export default class AXL_AI41_I_1H extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <AXL_Module {...this.props} partName={this.props.partName} width={35} terminals={this.props.terminals} leds={this.props.leds} raisedMidsection={false} hasTopRow={false} partNumber={this.props.partNumber} labels={['a','0','1','2','3']} colorCard={{isAnalogIn:true}}>
                <AXL_Connector type="POWER" isBlack={true} numRows={4} numCols={1}/>
                <AXL_Connector type="IO" isBlack={false} numRows={4} numCols={2}/>
                <AXL_Connector type="IO" isBlack={false} numRows={4} numCols={2}/>
            </AXL_Module>
        )
    }
}

AXL_AI41_I_1H.defaultProps = {
    partName:"AI4 I",
    partNumber: "2688491",
    terminals: defaultTerminals(12),
    leds: defaultLeds(12)
}