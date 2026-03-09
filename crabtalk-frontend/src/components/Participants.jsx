import { useRef } from 'react';

function Participants({htmlFor, label, id, name, value = 100}) {
    
    let inputRef = useRef(null);
    const handleValueChange = e => {
        if (parseInt(e.target.value) < 2) {
            inputRef.current.value = "2";
        }
        if (parseInt(e.target.value) > 100) {
            inputRef.current.value = "100";
        }
    }  
    
    return (
        <div className="welcome-gui-con">
            <label htmlFor={htmlFor}>{label}</label>
            <input ref={inputRef} className="welcome-input" type="number" id={id} name={name} value={value} min="2" max="100" placeholder="100" onBlur={handleValueChange} />
        </div>
    )
}

export default Participants;