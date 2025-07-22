import { useState } from "react";
import { useRef } from 'react';

function Participants(props) {
    
    let inputRef = useRef(null)
    const handleValueChange = e => {
        if (parseInt(e.target.value) < 2) {
            inputRef.current.value = "2"
        }
        if (parseInt(e.target.value) > 100) {
            inputRef.current.value = "100"
        }
    }  
    
    return (
        <div className="welcome-gui-con">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input ref={inputRef} className="welcome-input" type="number" id={props.id} name={props.name} value={props.value} min="2" max="100" placeholder="100" onBlur={handleValueChange} />
        </div>
    )
}

export default Participants