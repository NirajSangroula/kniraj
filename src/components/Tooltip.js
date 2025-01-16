import React, { useState } from 'react'
import {Children} from 'react';
import Notify from './Notify';
import notify from './Notify';
function Tooltip({children, text}){
    const [showingChildren, setShowingChildren] = useState(false)
    const tooltipElement = <div style={{
        position: 'absolute',
        top: '60px',
        right: '2rem',
        boxShadow: '-1px 3px 2px 7px black',
        padding: '0.5rem 1rem',
        zIndex: 1,
        backgroundColor: 'white'


        
    }}>
        {text}
    </div>


    let childrenWithMouseOver = Children.map(children, (child, index) => {
        if(index == 0 && React.isValidElement(child)){
            return React.cloneElement(child, {
                onMouseOver: () => setShowingChildren(true),
                onMouseOut: () => setShowingChildren(false),
                onClick: () => {navigator.clipboard.writeText(text); notify("Copied to the clipboard", 2000)}
            })
        }
    })

    return (
        <>
            {childrenWithMouseOver}
            {showingChildren && tooltipElement}
        </>
    )
}
export default Tooltip;