import React from 'react'
import './button.css'

function Button(props) {
    return (
        <div className='button' onClick={() => props.click(props.children)}>
            {props.children}
        </div>
    )
}

export default Button
