import { useState, useEffect } from 'react';

function Participants({ htmlFor, label, id, name }) {
    const [maxTalkers, setMaxTalkers] = useState(100);
    useEffect(() => {
        if (maxTalkers < 2) {
            setMaxTalkers(2);
        }
        if (maxTalkers > 100) {
            setMaxTalkers(100);
        }
    }, [maxTalkers]);
    
    return (
        <div className="welcome-gui-con">
            <label htmlFor={htmlFor}>{label}</label>
            <input className="welcome-input" type="number" id={id} name={name} value={maxTalkers} min="2" max="100" onChange={e => { setMaxTalkers(e.target.value); }} />
        </div>
    )
}

export default Participants;