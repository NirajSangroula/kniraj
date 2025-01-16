import React from "react"

function ProjectComponent({children, styles}){
    if(children.length != 4){
        return (<div></div>)
    }
    const firstChildren = React.cloneElement(children[0], {
        style: {
            ...children[0].props.style,
        }
    })
    const secondChildren = React.cloneElement(children[1], {
        style: {
            ...children[1].props.style,
        }
    })
    const thirdChildren = React.cloneElement(children[2], {
        style: {
            ...children[2].props.style,
        }
    })
    const fourthChildren = React.cloneElement(children[3], {
        style: {
            ...children[3].props.style,
        }
    })
    return (
        <div class="ProjectGroup" style={{...styles, marginTop: '3rem'
        }}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', paddingTop: '20px'}}>
                {firstChildren}
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', paddingBottom:'10px'}}>
                {secondChildren}
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000', color: '#FFFFFF', padding: '1rem 10%'}}>
                {thirdChildren}
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', padding: '0.5rem 20%'}}>
                {fourthChildren}
            </div>
            <div style={{height: '30px', backgroundColor: '#000000'}}></div>
        </div>
    )
}
export default ProjectComponent