import React from 'react'
import '../App.css'

const CharacterButtons = (props) => {
    return <div className='edit'>
        <button className='bottombuttons' onClick={e => props.handleEdit(e)}>Edit</button>
        <button className='bottombuttons' onClick={e => props.handleDelete(e)}>Delete</button>
    </div>
}

export default CharacterButtons