import React from 'react';
import AxlModule,{defaultTerminals,defaultLeds} from '@core/AxlModule/AxlModule.jsx';
import AxlConnector from '@core/AxlConnector/AxlConnector.jsx';


export default class AxlAI8 extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <AxlModule {...this.props} partName={this.props.partName} width={this.props.mmWidth} terminals={this.props.terminals} leds={this.props.leds} raisedMidsection={false} hasTopRow={false} partNumber={this.props.partNumber} labels={['a','0','1','2','3','4','5','6','7']} colorCard={{isAnalogIn:true}}>
                <AxlConnector type="POWER" isBlack={true} numRows={4} numCols={1}/>
                <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2}/>
                <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2}/>
                <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2}/>
                <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2}/>
            </AxlModule>
        )
    }
}

AxlAI8.defaultProps = {
    partName: 'AI8',
    partNumber: 2688064,
    mmWidth:    53.6,             //width of component in mm which can be converted to px size
    mmHeight:   122,  
    terminals: defaultTerminals(36),
    leds: defaultLeds(36)
}