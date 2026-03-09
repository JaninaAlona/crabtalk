import { useState } from 'react';
import CustomCheckbox from './CustomCheckbox.jsx';

function Password({pwID, pwLabel, pwName, id, name, htmlFor, label, value}) {
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
            <label htmlFor={pwID}>{pwLabel}</label>
            <input className="welcome-input" type={pwInputType} id={pwID} name={pwName} value={pwValue} onChange={e => { setPwValue(e.target.value); onPWInput() }} />
            <CustomCheckbox id={id} name={name} htmlFor={htmlFor} label={label} value={value} checked={isChecked} onChange={e => { setChecked(e.target.checked); onPWVisibilityChange() }} />
        </div>
    )
}

export default Password
