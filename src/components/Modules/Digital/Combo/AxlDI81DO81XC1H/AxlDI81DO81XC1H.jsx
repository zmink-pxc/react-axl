import React from 'react';
import AxlModule,{defaultTerminals,defaultLeds} from '@bit/zmink.axioline.axl-module';
import AxlConnector from '@bit/zmink.axioline.axl-connector';

export default class AxlDI81DO81XC1H extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        const {partName,partNumber,mmWidth,mmHeight,terminals,leds,...rest} = this.props;

        return (
            <AxlModule  {...rest} partName={this.props.partName} width={this.props.mmWidth} terminals={this.props.terminals} leds={this.props.leds} raisedMidsection={false} hasTopRow={false} partNumber={this.props.partNumber} labels={['a','0','1','2','3']} colorCard={{isComboDigital:true}}>
                <AxlConnector type="POWER" isBlack={true} numRows={4} numCols={1}/>
                <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2}/>
                <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2}/>
            </AxlModule>
        )
    }
}

AxlDI81DO81XC1H.defaultProps = {
    partName: "DI8/1 DO8/1 XC",
    partNumber: "2702017",
    mmWidth:    35,             //width of component in mm which can be converted to px size
    mmHeight:   122,
    terminals: defaultTerminals(12),
    leds: defaultLeds(12)
}