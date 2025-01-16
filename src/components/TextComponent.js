function TextComponent({children, colorIndex, styles}){
    let color = '#221A4B'
    switch(colorIndex){
        case 0: color = '#221A4B'; break;
        case 1: color = 'black'; break;
        default: color = 'white';
    }
    const divStyle={
        display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '8rem',
            backgroundColor: color,
            color: 'white',
            fontSize: '24px',
            padding: '0px 2rem',
            ...styles
    }
    return (
        <>
            <div style={divStyle}>
                <span>{children}</span></div>
        </>
    )
}
export default TextComponent