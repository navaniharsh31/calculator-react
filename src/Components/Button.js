import React from 'react'
import './button.css'

function Button(props) {
    return (
        <div className={`button`}>
            {props.children}
        </div>
    )
}

export default Button
