import React from 'react'
import Colors from '../../constants/Colors'

const styles = {
    input: {
        borderRadius: "20px",
        border: `1px solid ${Colors.secondary}`,
        backgroundColor: `${Colors.light}`,
        height: "30px",    
    }
}
    
const Input = props => {
    const { handleChangeName, name } = props
    return (
        <input style={styles.input} value={name} onChange={e => handleChangeName(e)} type="text" name="name" />
    )
}

export default Input