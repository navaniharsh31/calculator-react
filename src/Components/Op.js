import React from 'react'
import './button.css'

function Op(props) {
    return (
        <div className='button' onClick={() => props.click()}>
            {props.children}
        </div>
    )
}

export default Op