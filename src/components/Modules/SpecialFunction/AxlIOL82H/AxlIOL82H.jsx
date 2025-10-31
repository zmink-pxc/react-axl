import React from 'react';
import AxlModule,{defaultTerminals,defaultLeds} from '../../../Core/AxlModule/AxlModule';
import AxlConnector from '../../../Core/AxlConnector/AxlConnector';

export default class AxlIOL82H extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        const {partName,partNumber,mmWidth,mmHeight,terminals,leds,...rest} = this.props;
        
        // Power connector: 4 rows, top two red, bottom two blue
        const powerTerminals = [
            {redPlunger: true},   // Row 0: Red
            {redPlunger: true},   // Row 1: Red
            {bluePlunger: true},  // Row 2: Blue
            {bluePlunger: true}   // Row 3: Blue
        ];

        // IO connector: 4 rows x 2 columns = 8 terminals per connector
        // For 3-conductor IO-Link: Orange (default), Red, Blue pattern
        // Each connector handles 2 IO-Link ports
        const ioTerminals = [
            {},                   // Row 0 Col 0: Orange (default)
            {redPlunger: true},   // Row 1 Col 0: Red
            {bluePlunger: true},  // Row 2 Col 0: Blue
            {},                   // Row 3 Col 0: Orange (default)
            {},                   // Row 0 Col 1: Orange (default)
            {redPlunger: true},   // Row 1 Col 1: Red
            {bluePlunger: true},  // Row 2 Col 1: Blue
            {}                    // Row 3 Col 1: Orange (default)
        ];
        
        return (
            <AxlModule {...rest} partName={this.props.partName} width={this.props.mmWidth} terminals={this.props.terminals} leds={this.props.leds} raisedMidsection={false} hasTopRow={true} partNumber={this.props.partNumber} labels={['a','0','1','2','3']} colorCard={{isSpecialFn:true}}>
                <AxlConnector type="POWER" isBlack={true} numRows={4} numCols={1} terminals={powerTerminals}/>
                <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2} terminals={ioTerminals}/>
                <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2} terminals={ioTerminals}/>
                <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2} terminals={ioTerminals}/>
                <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2} terminals={ioTerminals}/>
            </AxlModule>
        )
    }
}

AxlIOL82H.defaultProps = {
    partName: "IOL8 2H",
    partNumber: "1027843",
    mmWidth:    35,             //width of component in mm which can be converted to px size
    mmHeight:   129.9,   
    terminals: defaultTerminals(12),
    leds: defaultLeds(12)
}

