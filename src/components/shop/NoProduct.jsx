
import React from "react"
import svg from "../icons/noContent.svg"

export const NoProduct = () => {

    return (
        <div style={{ marginTop: "-500px", marginLeft: "200px" }}>
            <img src={svg} alt=" No Product" />
            <figcaption style={{ fontSize: "48px", color: "#8A8A8A" }}> Нет товара</figcaption>
        </div>
    )
}