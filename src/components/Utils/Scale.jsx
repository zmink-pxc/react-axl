import React from 'react';
import { useRef, useEffect, useState } from 'react';
import toPx from 'unit-to-px';
import useViewportSizes from 'use-viewport-sizes'

const mmToPx = toPx('mm');

export function useRenderedSizes(props){
    const ref = useRef();
    //const parentRef = useRef(null);
    const [childSize,setChildSize] = useState(null);
    const [parentSize,setParentSize] = useState(null);

    useEffect(()=>{
        if (ref.current){
            var width=0;
            var height=0;
            var parentRect = ref.current.parentElement.getBoundingClientRect();
            setParentSize({width: parentRect.width, height: parentRect.height});
            ref.current.children[0].children.forEach((childEl)=>{
                //console.log(childEl);
                const rect = childEl.getBoundingClientRect();
                width += rect.width;
                height = rect.height;
            })
            setChildSize({width: width,height: height});
            console.log(`Children height ${height}, width ${width}`)   
        }
             
    },[ref])

    return [ref,parentSize,childSize]
}

//get the size in px of the parent component
export function useParentSize(props){
    const ref = useRef();
    //const [parentSize,setParentSize] = useState(null);
    var parentSize = null;

    if (ref.current){
        var elementWidth,elementHeight
        const element = ref.current;
        var computedStyle = getComputedStyle(element);

        elementHeight = element.clientHeight;  
        elementWidth = element.clientWidth;   

        elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
        elementWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);

        parentSize = {width: elementWidth, height: elementHeight};
    }

    return [ref,parentSize]
}

export function ScaleRendered(props){
    const [ref,parentSize,childSize] = useRenderedSizes();
    const [rendered, setRendered] = useState(false);

    useEffect(()=>{
        setRendered(true);
    },[])

    var t = null;
    var style = {display: 'none'}

    if (parentSize && childSize){
        t = calcTransform(childSize,parentSize)
    }

    if (t && t < 1){
        style.transform = `scale(${t})`;
    }

    if (rendered === true){
        style.display = 'block'
    }

    return <div ref={ref} style={style}>{props.children}</div>
}

/**
 * Uses axio default size in mm props to transform the bus to fit
 * inside parent component
 *
 * @export
 * @param {*} props
 * @returns
 */
export function AxioBusScale(props){
    const [rendered, setRendered] = useState(false);
    const [ref,parentSize] = useParentSize();
    const [vpWidth, vpHeight] = useViewportSizes(250);
    var childSize = null;
    var style = {};

    useEffect(()=>{
        setRendered(true);
    },[])

    var elements = null
    if (props.children[0].type.toString() === "Symbol(react.suspense)"){
        elements = props.children.map((child)=>{
            return child.props.fallback
        })
    }else{
        elements = props.children;
    }
    childSize = getBusSize(elements)



    var t = null;
    

    if (parentSize && childSize){
        t = calcTransform(childSize,parentSize)
    }

    if (t && t < 1){
        style.transform = `scale(${t})`;
        //style.transformOrigin = 'left';
    }

    return <div ref={ref} className={props.className} style={style}>{((rendered === true)&&(parentSize)) ? props.children:false}</div>
}

function calcTransform(childSize,parentSize){
    const ty = parentSize.height/childSize.height;
    const tx = parentSize.width/childSize.width;

    return (ty < tx) ? ty:tx 
}

function getAxioSize(component){
    const oH = component.props.mmHeight || 122;
    const oW = component.props.mmWidth;
    // if (!component.props.mmHeight){throw Error('Component doesnt have mmHeight value in default props')}
    // if (!component.props.mmWidth){throw Error('Component doesnt have mmWidth default prop')}
    const h = oH * mmToPx;
    const w = oW * mmToPx;

    return {width: w,height: h}
}

//current expects single row bus
function getBusSize(componentArr){
    var totalWidth = 0;
    var totalHeight = 0;
    componentArr.forEach((component)=>{
        const cSize = getAxioSize(component);
        totalWidth += cSize.width;
        totalHeight = cSize.height;
    })
    return {width: totalWidth,height: totalHeight}
}