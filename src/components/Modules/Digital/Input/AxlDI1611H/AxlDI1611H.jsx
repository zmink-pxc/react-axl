import React from 'react';
import AxlModule,{defaultTerminals,defaultLeds} from '../../../../Core/AxlModule/AxlModule.jsx';
import AxlConnector from '../../../../Core/AxlConnector/AxlConnector.jsx';


export default class AxlDI1611H extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <AxlModule {...this.props} partName={this.props.partName} width={this.props.mmWidth} terminals={this.props.terminals} leds={this.props.leds} raisedMidsection={false} hasTopRow={false} partNumber={this.props.partNumber} labels={['a','0','1','2','3']} colorCard={{isDigitalIn:true}}>
                <AxlConnector type="POWER" isBlack={true} numRows={4} numCols={1}/>
                <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2}/>
                <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2}/>
            </AxlModule>
        )
    }
}

AxlDI1611H.defaultProps = {
    partNumber: "2688310",
    partName: "DI16/1",
    mmWidth:    35,             //width of component in mm which can be converted to px size
    mmHeight:   122,   
    terminals: defaultTerminals(12),
    leds: defaultLeds(12)
}