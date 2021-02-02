import React from 'react'
import '../App.css'

const TextButtons = (props) => {
    return <div>
        <button onClick={(e) => props.handleAddCharacter(e)}> Add New Character</button>
    </div>
}

export default TextButtons