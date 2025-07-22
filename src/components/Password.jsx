import { useRef } from 'react';
import CustomCheckbox from './CustomCheckbox.jsx';

function Password(props) {
    let pwInput = useRef(null)
    let showPWToggle = useRef(null)
    
    function onPWVisibilityChange() {
        if (showPWToggle.current.checked === true) {
            pwInput.current.type = "text"
        } else {
            pwInput.current.type = "password"
        }
    }
    
    return (
        <div className="welcome-gui-con">
            <label htmlFor={props.pwID}>{props.pwLabel}</label>
            <input ref={pwInput} className="welcome-input" type="password" id={props.pwID} name={props.pwName} placeholder="none" />
            <CustomCheckbox ref={showPWToggle} id={props.id} name={props.name} htmlFor={props.htmlFor} label={props.label} value={props.value} checked={props.checked}onChange={onPWVisibilityChange} />
        </div>
    )
}

export default Password
