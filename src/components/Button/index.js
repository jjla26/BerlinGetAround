import React from 'react'
import Colors from '../../constants/Colors'

const styles = {
    button: type => ({
        height: "40px",
        width: "80px",
        border: `1px solid ${type === "danger" ? Colors.secondary : Colors.primary}`,
        borderRadius: "20px",
        cursor: "pointer",
        backgroundColor: type === "danger" ? Colors.secondary : Colors.primary,
        color: "white"
    })
}

const Button = props => {
    const { type, handleClick } = props
    return (
        <button style={styles.button(type)} onClick={handleClick} type="button">
            {props.children}
        </button>
    )
}

export default Button