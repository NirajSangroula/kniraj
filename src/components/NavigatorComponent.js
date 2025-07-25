import React, { use, useEffect } from "react"
import { rangeFromPageNumber } from "../helpers/pages"

function NavigatorComponent({children}) {
    const [currentPage, setCurrentPage] = React.useState(1)
    let elements = React.Children.map(children, (child, index) => {
        if(React.isValidElement(child)){
            console.log(child.props)
            return React.cloneElement(child, {...child.props, id: 'ElementGroup' + index})
        }
    })
    const noOfElements = elements.length
    const elementsPerPage = 4
    const numberOfPages = Math.ceil(noOfElements / elementsPerPage)
    const pageSelectors = []
    for(let i = 0; i < numberOfPages; i++){
        pageSelectors.push(
        <div style={{fontSize: '2rem', border: '1px solid black', borderRight: '1px solid black', cursor: 'pointer', padding: '1rem 0', flexBasis: (100 / numberOfPages) + '%', textAlign: 'center'}}
         onClick={() => {
            const car = document.getElementById('car')
            car.style.left = (100 * i) + '%'
            setCurrentPage(i+1)
        }}>
            {(i == 0) && <i id="car" style={{transition: 'left 1s', position: 'relative', left: '0'}} className="fa-solid fa-car-side"></i>}
        </div>
        )
    }
    useEffect(() => {
        //Fragile code here -> Depends on Project Group
        elements = document.getElementsByClassName('ProjectGroup')
        setTimeout(() => {
            Array.from(elements).forEach((element, index) => {
                element.style.transition = 'all 1s ease'
                element.style.opacity = '0'
                element.style.transform = 'matrix(0.3, 0, 0.1, 0.3, 0, 0)'
            })
        }, 10)
        //Changing opacity afterwards
        setTimeout(() => {
            Array.from(elements).forEach((element) => {
                element.style.opacity = '1';
                element.style.transform = 'scale(1,1)'
            });
        }, 700);
        console.log('changed')
    }, [currentPage]) 

    return (
        <>
            {elements.map((element, index) => {
                if (index >= rangeFromPageNumber(currentPage)[0] && index <= rangeFromPageNumber(currentPage)[1]) {
                    return element
                }
            })}
            <div style={{display: 'flex', justifyContent: 'stretch', alignItems: 'stretch', flexBasis: '100%', backgroundColor: '#F0F0F0', marginTop: '2rem'}} >
                {pageSelectors}
            </div>
        </>
    )
}
export default NavigatorComponent
