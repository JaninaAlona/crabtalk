import { useState } from 'react';
import CustomCheckbox from './CustomCheckbox.jsx';

function Password(props) {
    const [pwInputType, setPwInputType] = useState('password');
    const [pwValue, setPwValue] = useState('');
    const [isChecked, setChecked] = useState(false);
    
    function onPWVisibilityChange() {
        if (isChecked === false) {
            setPwInputType('text');
        } else {
            setPwInputType('password');
        }
    }

    function onPWInput() {
        if (isChecked === true) {
            setPwInputType('text');
        } else {
            setPwInputType('password');
        }
    }
        
    return (
        <div className="welcome-gui-con">
            <label htmlFor={props.pwID}>{props.pwLabel}</label>
            <input className="welcome-input" type={pwInputType} id={props.pwID} name={props.pwName} value={pwValue} onChange={e => { setPwValue(e.target.value); onPWInput() }} />
            <CustomCheckbox id={props.id} name={props.name} htmlFor={props.htmlFor} label={props.label} value={props.value} checked={isChecked} onChange={e => { setChecked(e.target.checked); onPWVisibilityChange() }} />
        </div>
    )
}

export default Password
