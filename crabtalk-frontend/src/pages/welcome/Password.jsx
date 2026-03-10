import { useState, useEffect } from 'react';
import CustomCheckbox from './CustomCheckbox.jsx';

function Password({ pwID, pwLabel, pwName, id, name, htmlFor, label }) {
    const [pwInputType, setPwInputType] = useState('password');
    const [pwValue, setPwValue] = useState('');
    const [isChecked, setChecked] = useState(false);
    const [valueWhenChecked, setValueWhenChecked] = useState(false);

    useEffect(() => {
        if (isChecked) {
            setPwInputType('text');
        } else {
            setPwInputType('password');
        }
    }, [isChecked]);

    return (
        <div className="welcome-gui-con">
            <label htmlFor={pwID}>{pwLabel}</label>
            <input className="welcome-input" type={pwInputType} id={pwID} name={pwName} value={pwValue} onChange={e => { setPwValue(e.target.value); }} />
            <CustomCheckbox id={id} name={name} htmlFor={htmlFor} label={label} value={valueWhenChecked} checked={isChecked} onChange={e => { setChecked(e.target.checked); setValueWhenChecked(e.target.checked); }} />
        </div>
    )
}

export default Password;