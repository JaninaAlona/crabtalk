import { useState, useEffect, forwardRef } from 'react';

const Participants = forwardRef(function Participants(props, ref) {
    const { htmlFor, label, id, name } = props;
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
            <input ref={ref} className="welcome-input" type="number" id={id} name={name} value={maxTalkers} min="2" max="100" onChange={e => { setMaxTalkers(e.target.value); }} />
        </div>
    )
});

export default Participants;