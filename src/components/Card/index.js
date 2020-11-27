import React from 'react'
import Colors from '../../constants/Colors'

const styles = {
    container: (button,active) => ({
        width: "60%",
        margin: button ? "10px" : "auto",
        border: `1px solid ${Colors.secondary}`,
        borderRadius: "10px",
        boxShadow: `0 2px 3px ${Colors.secondary}`,
        padding: "20px",
        backgroundColor: "white",
        cursor: button ? "pointer" : "",
        backgroundColor: active ? Colors.primary : "white",
        color: active ? "white" : ""
    })
}

const Card = props => {
    const { title, button, handleClickCard, active } = props
    return (
        <div onClick={handleClickCard} style={styles.container(button, active)}>
            <h4>{title}</h4>
            <div>{props.children}</div>
        </div>

    )
}

export default Card