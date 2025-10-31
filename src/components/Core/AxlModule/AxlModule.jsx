import React from 'react';
import classNames from 'classnames';
import styles from './AxlModule.module.scss';
import PropTypes from 'prop-types';
import AxlColorID from '../AxlColorID/AxlColorID';
import PhoenixP from '../PhoenixP/PhoenixP';
import PhoenixBrand from '../PhoenixBrand/PhoenixBrand';

export default class AxlModule extends React.PureComponent {
    constructor(props) {
        super(props)

        this.numConnectors = (props.children) ? (props.children.length) : 0;
        this.connSectionWidth = 0;
        this.terminalOffset = 0; // Track how many terminals we've distributed
        this.ledOffset = 0; // Track how many LEDs we've distributed
        this.ioConnectorIndex = 0; // Track IO connector index (excluding power)
        this.topRowColumnOffset = 0; // Track column offset for top-row connectors
    }

    faceWidth = () => {
        return Math.floor(this.props.width / 10) * 10;
    }

    mapPropsToConnector = (connector, connectorIndex, isTopRow = false) => {
        this.connSectionWidth = this.connSectionWidth + (connector.props.numCols * 5)
        if ((connectorIndex === this.numConnectors - 1) && (this.props.hasTopRow)) {
            this.connSectionWidth = this.connSectionWidth / 2 + 2.5;
        }
        
        const connectorType = connector.props.type || 'IO';
        const numRows = connector.props.numRows || 4;
        const numCols = connector.props.numCols || 1;
        const numTerminals = numRows * numCols;
        const numLeds = numRows * numCols; // LEDs typically match terminals
        
        // Get custom labels from props if provided
        const customTerminalLabels = connector.props.customTerminalLabels || 
            (connectorType === 'POWER' ? this.props.powerTerminalLabels : this.props.ioTerminalLabels);
        const customLedLabels = connector.props.customLedLabels ||
            (connectorType === 'POWER' ? this.props.powerLedLabels : this.props.ioLedLabels);
        
        // Get terminals/LEDs - prioritize connector's own props, then module props, then defaults
        let terminals = [];
        let leds = [];
        
        // For top-row connectors, track global column offset
        let columnOffset = 0;
        if (isTopRow && connectorType === 'IO') {
            columnOffset = this.topRowColumnOffset;
        }
        
        // Check if connector already has terminals/LEDs
        if (connector.props.terminals && connector.props.terminals.length > 0) {
            // Use connector's terminals, but ensure they have labels
            terminals = connector.props.terminals.map((term, idx) => {
                if (!term.label) {
                    const defaultLabels = defaultTerminals(numTerminals, connectorType, 
                        connectorType === 'IO' ? this.ioConnectorIndex : 0, 
                        numRows, numCols, isTopRow, false, customTerminalLabels, columnOffset);
                    return { ...term, label: defaultLabels[idx]?.label || String(idx).padStart(2, '0') };
                }
                return term;
            });
        } else if (this.props.terminals && this.props.terminals.length > this.terminalOffset) {
            // Use provided terminals from module, but ensure they have labels
            terminals = this.props.terminals.slice(this.terminalOffset, this.terminalOffset + numTerminals);
            // Fill labels if missing
            terminals = terminals.map((term, idx) => {
                if (!term.label) {
                    const defaultLabels = defaultTerminals(numTerminals, connectorType, 
                        connectorType === 'IO' ? this.ioConnectorIndex : 0, 
                        numRows, numCols, isTopRow, false, customTerminalLabels, columnOffset);
                    return { ...term, label: defaultLabels[idx]?.label || String(idx).padStart(2, '0') };
                }
                return term;
            });
        } else {
            // Generate default terminals with labels
            terminals = defaultTerminals(numTerminals, connectorType, 
                connectorType === 'IO' ? this.ioConnectorIndex : 0, 
                numRows, numCols, isTopRow, false, customTerminalLabels, columnOffset);
        }
        
        if (connector.props.leds && connector.props.leds.length > 0) {
            // Use connector's LEDs, but ensure they have labels
            leds = connector.props.leds.map((led, idx) => {
                if (!led.label) {
                    const defaultLabels = defaultLeds(numLeds, connectorType, 
                        connectorType === 'IO' ? this.ioConnectorIndex : 0, 
                        numRows, numCols, isTopRow, false, customLedLabels, columnOffset);
                    return { ...led, label: defaultLabels[idx]?.label || String(idx).padStart(2, '0') };
                }
                return led;
            });
        } else if (this.props.leds && this.props.leds.length > this.ledOffset) {
            // Use provided LEDs from module, but ensure they have labels
            leds = this.props.leds.slice(this.ledOffset, this.ledOffset + numLeds);
            // Fill labels if missing
            leds = leds.map((led, idx) => {
                if (!led.label) {
                    const defaultLabels = defaultLeds(numLeds, connectorType, 
                        connectorType === 'IO' ? this.ioConnectorIndex : 0, 
                        numRows, numCols, isTopRow, false, customLedLabels, columnOffset);
                    return { ...led, label: defaultLabels[idx]?.label || String(idx).padStart(2, '0') };
                }
                return led;
            });
        } else {
            // Generate default LEDs with labels
            leds = defaultLeds(numLeds, connectorType, 
                connectorType === 'IO' ? this.ioConnectorIndex : 0, 
                numRows, numCols, isTopRow, false, customLedLabels, columnOffset);
        }
        
        // Update offsets and indices
        // Only update terminal/led offsets if we consumed from module's arrays
        if (!connector.props.terminals && this.props.terminals) {
            this.terminalOffset += numTerminals;
        }
        if (!connector.props.leds && this.props.leds) {
            this.ledOffset += numLeds;
        }
        // Always update IO connector index for proper numbering
        if (connectorType === 'IO') {
            this.ioConnectorIndex++;
        }
        // Update top-row column offset for next top-row connector
        if (isTopRow && connectorType === 'IO') {
            this.topRowColumnOffset += numCols;
        }
        
        // For top-row connectors with multiple columns, swap columns to compensate for 180° rotation
        // Labels: [col0:40,50,60,70, col1:41,51,61,71]
        // AxlConnector maps: col 0 (indices 0-3) → DOM left, col 1 (indices 4-7) → DOM right
        // After 180° rotation: DOM left → visual RIGHT, DOM right → visual LEFT
        // We want: visual LEFT = 70,60,50,40 (col 0) and visual RIGHT = 71,61,51,41 (col 1)
        // Therefore: put col 1 first so it becomes DOM left → visual RIGHT ✓
        if (isTopRow && numCols > 1 && numRows > 0) {
            const swappedTerminals = [];
            const swappedLeds = [];
            // Reverse column order: col 1, then col 0
            for (let col = numCols - 1; col >= 0; col--) {
                const colStart = col * numRows;
                const colEnd = colStart + numRows;
                swappedTerminals.push(...terminals.slice(colStart, colEnd));
                swappedLeds.push(...leds.slice(colStart, colEnd));
            }
            terminals = swappedTerminals;
            leds = swappedLeds;
        }
        
        return {
            terminals: terminals,
            leds: leds,
            rotateLabels: isTopRow // Flag to rotate labels back 180deg for top row connectors
        };
    }

    withMM = (num) => {
        return num + "mm";
    }

    render() {
        const { moduleName, numCols, fullWidthLogo, width, raisedMidsection, hasTopRow, labels, partName, partNumber, colorCard, children, ...rest } = this.props;

        // Reset tracking variables for each render
        this.connSectionWidth = 0;
        this.terminalOffset = 0;
        this.ledOffset = 0;
        this.ioConnectorIndex = 0;
        this.topRowColumnOffset = 0;
        
        let middleWidth = (numCols * 5) + "mm";
        let Logo = (fullWidthLogo === true) ? PhoenixBrand : PhoenixP;
        let tChildren = []; //top row children
        let bChildren = []; //bottom row children
        //iterate over children and map to the appropriate children container array
        const foldPoint = ((this.numConnectors - 1) / 2) + 1;
        React.Children.map(children, (child, index) => {
            //if top row (2f/2h) exists, and element is not the power connector (element 0)
            const isTopRow = hasTopRow && (index >= foldPoint);
            const connectorProps = this.mapPropsToConnector(child, index, isTopRow);
            
            if (isTopRow) {
                const newProps = {
                    ...connectorProps,
                    style: {
                        transform: 'rotate(180deg)'
                    },
                    key: `${moduleName}-con-${index}`
                }
                tChildren.push(React.cloneElement(child, newProps));
            } else {
                const newProps = {
                    ...connectorProps,
                    key: `${moduleName}-con-${index}`
                }
                bChildren.push(React.cloneElement(child, newProps));
            }
        })

        const moduleTopStyle = this.props.hasTopRow ? {
            width: this.faceWidth() + "mm",
            border: 'none',
            marginRight: '6mm',
            justifyContent: 'flex-end'
        } : {
            width: this.faceWidth() + "mm"
        };

        return (<div className={styles.moduleBase} style={{ width: width + "mm", justifyContent: this.props.hasTopRow ? "center" : "flex-start" }} {...rest}>
            <div className={styles.moduleTop} style={moduleTopStyle}>
                {/* {hasTopRow ? (<VerticalPartLabel partName={partName} partNumber={partNumber}/>):(null)} */}
                {((raisedMidsection || hasTopRow) === false) ?
                    (<div className={styles.raisedContainer} style={{ width: this.faceWidth() + "mm" }}>
                        <Vents width={width} upper={true} />
                        <Label width={this.faceWidth() - 4 + 1} labels={labels} />
                        <LabelHolder>
                        </LabelHolder>
                        <div className={styles.brandArea}>
                            <div className={styles.logo}>
                                <Logo />
                            </div>
                            {/* <img className={styles.logo} src={logo} alt="Phoenix Contact"/> */}
                            <div className={styles.printArea}>
                                <div className={styles.print}>{partName}</div>
                                <div className={styles.print}>{partNumber}</div>
                            </div>
                        </div>
                        <Vents width={width} lower={true} />
                    </div>) : (<>{tChildren}</>)}
            </div>
            <div className={styles.moduleMiddle} style={{ width: this.connSectionWidth + 'mm' }}>
                <AxlColorID {...colorCard} />
                <Inset />
            </div>
            <div className={styles.moduleBottom}>
                {bChildren}
            </div>
        </div>)
    }
}

AxlModule.propTypes = {
    raisedMidsection: PropTypes.bool.isRequired,          //does the card have a raised midsection
    hasTopRow: PropTypes.bool.isRequired,          //do the connectors appear at the top of the module
    width: PropTypes.number.isRequired,        //width in mm of the card
    colorCard: PropTypes.object.isRequired,        //properties to pass to colorID card
    partNumber: PropTypes.string.isRequired,        //part number of the module
    partName: PropTypes.string.isRequired,        //name of the product as displayed on the physical unit
    fullWidthLogo: PropTypes.bool,                     //should show full width phoenix contact logo
    moduleName: PropTypes.string,                   //name of the module e.g. AI8,DO8, etc
    terminals: PropTypes.array,                      //array of terminal objects (optional, will generate defaults)
    leds: PropTypes.array,                           //array of LED objects (optional, will generate defaults)
    powerTerminalLabels: PropTypes.array,            //custom terminal labels for power connectors
    powerLedLabels: PropTypes.array,                 //custom LED labels for power connectors
    ioTerminalLabels: PropTypes.array,               //custom terminal labels for IO connectors
    ioLedLabels: PropTypes.array                     //custom LED labels for IO connectors
}

AxlModule.defaultProps = {
    labels: ['a', '0', '1', '2', '3', '4', '5', '6', '7']
}

function VerticalPartLabel({ partName, partNumber}) {
    let Logo = PhoenixBrand;
    return (<div className={styles.brandAreaVertical}>
        <div className={styles.logoVertical}>
            <Logo />
        </div>
        {/* <img className={styles.logo} src={logo} alt="Phoenix Contact"/> */}
        <div className={styles.printAreaVertical}>
            <div className={styles.print}>{partName}</div>
            <div className={styles.print}>{partNumber}</div>
        </div>
    </div>)
}

//takes a width of the component in mm and calculates the number of vents should be rendered
function Vents(props) {
    var vents = [];
    const numvents = Math.floor(props.width / 6);
    const ventContainerWidth = props.width - 1 + "mm";
    const ventClass = classNames({ [styles.ventLower]: (props.lower === true) }, { [styles.ventUpper]: (props.upper === true) })
    for (var i = 0; i < numvents; i++) {
        vents.push(<div key={'v' + i} className={ventClass}></div>)
    }

    return (<div className={styles.ventContainer} style={{ width: ventContainerWidth }}>
        {vents}
    </div>)
}


//54/45mm
function Label(props) {
    const labelWidth = props.width + "mm";
    const lineWidth = (props.width - 3) + "mm";
    const singleWidth = (10 * props.labels.length > props.width)
    const numVerticalLines = props.labels.length - 1;
    const labelVerticalClass = classNames([styles.labelVerticalLine], { [styles.singleWidthMargin]: singleWidth }, { [styles.doubleWidthMargin]: !singleWidth })
    var Columns = props.labels.map((label, index) => {
        if (index < props.labels.length) {
            var borderStyle, flex
            if (index === 0) {
                borderStyle = 'none';
                flex = '2';
            } else if (index === (props.labels.length - 1)) {
                flex = '2';
                borderStyle = '0.25mm solid black';
            } else {
                borderStyle = '0.25mm solid black';
                flex = '1';
            }
            return (<div className={labelVerticalClass} key={'lbl' + index} style={{ borderLeft: borderStyle, flexGrow: flex }}>
                <span className={styles.labelText}>{label}</span>
            </div>)
        }
    });
    return (
        <div className={styles.labelBase} style={{ width: labelWidth }}>
            <div className={styles.labelHorizontalLine} style={{ width: lineWidth }}></div>
            {Columns}
        </div>
    )
}

function Inset(props) {
    //const insetWidth = props.width + "mm";
    return (
        <div className={styles.inset}></div>
    )
}

function LabelHolder(props) {
    return (<div className={styles.labelHolder}>
        {props.children}
    </div>)
}

/**
 * Generates terminal labels for power connectors based on position
 * @param {number} numRows - Number of rows in the connector
 * @param {number} numCols - Number of columns in the connector
 * @param {boolean} isTopRow - Whether this is a top power slice (will be rotated 180deg)
 * @param {boolean} isMiddlePower - Whether this is middle power (24V style)
 * @param {number} columnOffset - Global column offset for top-row connectors
 * @returns {Array<string>} Array of label strings
 */
export function generatePowerTerminalLabels(numRows, numCols = 1, isTopRow = false, isMiddlePower = false, columnOffset = 0) {
    if (isMiddlePower) {
        // Middle power uses a1, a2, b1, b2 pattern
        return ['a1', 'a2', 'b1', 'b2'].slice(0, numRows);
    }
    
    if (isTopRow) {
        // For top-row connectors (rotated 180°): we want the VISIBLE top line to be 70–73
        // The connector is rotated 180°, so row 3 becomes visible top, row 0 becomes visible bottom
        // We need to generate labels in column-major order:
        //   terminals[0] = col 0, row 0 (visible bottom after rotation) = 40
        //   terminals[1] = col 0, row 1 = 50
        //   terminals[2] = col 0, row 2 = 60
        //   terminals[3] = col 0, row 3 (visible top after rotation) = 70
        //   terminals[4] = col 1, row 0 (visible bottom after rotation) = 41
        //   terminals[5] = col 1, row 1 = 51
        //   terminals[6] = col 1, row 2 = 61
        //   terminals[7] = col 1, row 3 (visible top after rotation) = 71
        // columnOffset accounts for columns in previous top-row connectors
        const labels = [];
        for (let col = 0; col < numCols; col++) {
            const globalCol = columnOffset + col; // Global column position across all top-row connectors
            for (let row = 0; row < numRows; row++) {
                // Row 0 (becomes visible bottom) -> 40+globalCol
                // Row 1 -> 50+globalCol
                // Row 2 -> 60+globalCol
                // Row 3 (becomes visible top) -> 70+globalCol
                const baseRow = 40 + (row * 10); // 40, 50, 60, 70
                const label = String(baseRow + globalCol);
                labels.push(label);
            }
        }
        return labels;
    } else {
        // Bottom power slices: 40, 41, 42, 43
        // For single column: Row 0 -> 40, Row 1 -> 41, Row 2 -> 42, Row 3 -> 43
        const labels = [];
        for (let col = 0; col < numCols; col++) {
            for (let row = 0; row < numRows; row++) {
                labels.push(String(40 + row));
            }
        }
        return labels;
    }
}

/**
 * Generates terminal labels for IO connectors
 * @param {number} connectorIndex - Index of the connector (0-based, excluding power)
 * @param {number} numRows - Number of rows in the connector
 * @param {number} numCols - Number of columns in the connector
 * @returns {Array<string>} Array of label strings
 */
export function generateIOTerminalLabels(connectorIndex, numRows, numCols) {
    const labels = [];
    // IO connectors use XY format where:
    // base = connectorIndex * 20
    // col offset = colIndex * 10
    // final = base + col offset + rowIndex
    // Example: connector 0 -> col 0: 00-03, col 1: 10-13
    //          connector 1 -> col 0: 20-23, col 1: 30-33
    for (let col = 0; col < numCols; col++) {
        for (let row = 0; row < numRows; row++) {
            const base = connectorIndex * 20;
            const colOffset = col * 10;
            const value = base + colOffset + row;
            const label = String(value).padStart(2, '0');
            labels.push(label);
        }
    }
    return labels;
}

/**
 * Generates LED labels for power connectors (matches terminal labels)
 * @param {number} numRows - Number of rows in the connector
 * @param {number} numCols - Number of columns in the connector
 * @param {boolean} isTopRow - Whether this is a top power slice
 * @param {boolean} isMiddlePower - Whether this is middle power (24V style)
 * @param {number} columnOffset - Global column offset for top-row connectors
 * @returns {Array<string>} Array of label strings
 */
export function generatePowerLedLabels(numRows, numCols = 1, isTopRow = false, isMiddlePower = false, columnOffset = 0) {
    if (isMiddlePower) {
        // Middle power LEDs: D, UO, E1, E2
        return ['D', 'UO', 'E1', 'E2'].slice(0, numRows);
    }
    // For top/bottom power slices, LEDs match terminals
    return generatePowerTerminalLabels(numRows, numCols, isTopRow, isMiddlePower, columnOffset);
}

/**
 * Generates LED labels for IO connectors (matches terminal labels)
 * @param {number} connectorIndex - Index of the connector (0-based, excluding power)
 * @param {number} numRows - Number of rows in the connector
 * @param {number} numCols - Number of columns in the connector
 * @returns {Array<string>} Array of label strings
 */
export function generateIOLedLabels(connectorIndex, numRows, numCols) {
    // LEDs match terminals for IO connectors
    return generateIOTerminalLabels(connectorIndex, numRows, numCols);
}

/**
 * Generates default terminal objects with labels
 * @param {number} numTerminals - Total number of terminals
 * @param {string} connectorType - Type of connector ('POWER' or 'IO')
 * @param {number} connectorIndex - Index of the connector (0-based, excluding power for IO)
 * @param {number} numRows - Number of rows in the connector
 * @param {number} numCols - Number of columns in the connector
 * @param {boolean} isTopRow - Whether this is a top power slice (for POWER type)
 * @param {boolean} isMiddlePower - Whether this is middle power (for POWER type)
 * @param {Array<string>} customLabels - Optional custom labels to override defaults
 * @returns {Array<Object>} Array of terminal objects with labels
 */
export function defaultTerminals(numTerminals, connectorType = null, connectorIndex = 0, numRows = 4, numCols = 1, isTopRow = false, isMiddlePower = false, customLabels = null, columnOffset = 0) {
    // Backward compatibility: if only numTerminals is provided, return empty objects
    if (arguments.length === 1 && typeof numTerminals === 'number') {
        var vals = [];
        for (var k = 0; k < numTerminals; k++) {
            vals.push({});
        }
        return vals;
    }
    
    var labels = [];
    
    if (customLabels && customLabels.length === numTerminals) {
        labels = customLabels;
    } else if (connectorType === 'POWER') {
        labels = generatePowerTerminalLabels(numRows, numCols, isTopRow, isMiddlePower, columnOffset);
    } else if (connectorType === 'IO') {
        labels = isTopRow
            ? generatePowerTerminalLabels(numRows, numCols, true, false, columnOffset)
            : generateIOTerminalLabels(connectorIndex, numRows, numCols);
    } else {
        // Fallback: generate simple sequential labels
        labels = Array.from({ length: numTerminals }, (_, i) => String(i).padStart(2, '0'));
    }
    
    var vals = [];
    for (var k = 0; k < numTerminals; k++) {
        vals.push({
            label: labels[k] || String(k).padStart(2, '0')
        });
    }
    return vals;
}

/**
 * Generates default LED objects with labels
 * @param {number} numLeds - Total number of LEDs
 * @param {string} connectorType - Type of connector ('POWER' or 'IO')
 * @param {number} connectorIndex - Index of the connector (0-based, excluding power for IO)
 * @param {number} numRows - Number of rows in the connector
 * @param {number} numCols - Number of columns in the connector
 * @param {boolean} isTopRow - Whether this is a top power slice (for POWER type)
 * @param {boolean} isMiddlePower - Whether this is middle power (for POWER type)
 * @param {Array<string>} customLabels - Optional custom labels to override defaults
 * @returns {Array<Object>} Array of LED objects with labels
 */
export function defaultLeds(numLeds, connectorType = null, connectorIndex = 0, numRows = 4, numCols = 1, isTopRow = false, isMiddlePower = false, customLabels = null, columnOffset = 0) {
    // Backward compatibility: if only numLeds is provided, return empty objects
    if (arguments.length === 1 && typeof numLeds === 'number') {
        var vals = [];
        for (var i = 0; i < numLeds; i++) {
            vals.push({});
        }
        return vals;
    }
    
    var labels = [];
    
    if (customLabels && customLabels.length === numLeds) {
        labels = customLabels;
    } else if (connectorType === 'POWER') {
        labels = generatePowerLedLabels(numRows, numCols, isTopRow, isMiddlePower, columnOffset);
    } else if (connectorType === 'IO') {
        labels = isTopRow
            ? generatePowerLedLabels(numRows, numCols, true, false, columnOffset)
            : generateIOLedLabels(connectorIndex, numRows, numCols);
    } else {
        // Fallback: generate simple sequential labels
        labels = Array.from({ length: numLeds }, (_, i) => String(i).padStart(2, '0'));
    }
    
    var vals = [];
    for (var i = 0; i < numLeds; i++) {
        vals.push({
            label: labels[i] || String(i).padStart(2, '0')
        });
    }
    return vals;
}