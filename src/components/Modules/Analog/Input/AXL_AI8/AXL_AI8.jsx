import React from 'react';
import AXL_Module,{defaultTerminals,defaultLeds} from '../../../../Core/AXL_Module/AXL_Module.jsx';
import AXL_Connector from '../../../../Core/AXL_Connector/AXL_Connector.jsx';


export default class AXL_AI8 extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <AXL_Module {...this.props} partName={this.props.partName} width={this.props.mmWidth} terminals={this.props.terminals} leds={this.props.leds} raisedMidsection={false} hasTopRow={false} partNumber={this.props.partNumber} labels={['a','0','1','2','3','4','5','6','7']} colorCard={{isAnalogIn:true}}>
                <AXL_Connector type="POWER" isBlack={true} numRows={4} numCols={1}/>
                <AXL_Connector type="IO" isBlack={false} numRows={4} numCols={2}/>
                <AXL_Connector type="IO" isBlack={false} numRows={4} numCols={2}/>
                <AXL_Connector type="IO" isBlack={false} numRows={4} numCols={2}/>
                <AXL_Connector type="IO" isBlack={false} numRows={4} numCols={2}/>
            </AXL_Module>
        )
    }
}

AXL_AI8.defaultProps = {
    partName: 'AI8',
    partNumber: 2688064,
    mmWidth:    53.6,             //width of component in mm which can be converted to px size
    mmHeight:   122,  
    terminals: defaultTerminals(36),
    leds: defaultLeds(36)
}