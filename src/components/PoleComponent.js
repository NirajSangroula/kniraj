import React from "react"

function PoleComponent({children, styles}){
    if(children.length != 2){
        return (<div></div>)
    }
    const firstChildren = React.cloneElement(children[0], {
        style: {
            flexBasis: '250px',
            flexGrow: '1',
            padding: '2rem 1rem',
            backgroundColor: '#F0F0F0',
        }
    })
    const secondChildren = React.cloneElement(children[1], {
        style: {
            flexGrow: '8',
            backgroundColor: '#F0F0F0',
            padding: '0.7rem 0rem',
        }
    })
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'start',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '0.5rem'
        }}>
            {firstChildren}
            {secondChildren}
        </div>
    )
}
export default PoleComponent