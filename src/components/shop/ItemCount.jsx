import React from 'react'

export const ItemCount = ({ nodes }) => {

    // const letter = {
    //             display: 'inline-block',
    //             marginTop: "5px",
    //             marginBot: "10px",
    //             color: "grey"
    // }    
    const iconCounter = {
        display: 'inline-block',
        alignItems: 'center',
        justifyContent: 'center',
        width: "24px",
        height: "24px",
        marginLeft: "10px",
        marginTop: '10px',
        marginBot: '10px',

        background: "#ABABAB",
        borderRadius: "16px",
        textAlign: "center"
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{nodes.name}</span>
            <span style={iconCounter}>{nodes.childCount}</span>
        </div>
    )


}