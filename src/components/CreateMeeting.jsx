import { useRef } from 'react';
import { useState } from "react";
import Password from './Password.jsx';
import MeetingType from './MeetingType.jsx';

function CreateMeeting() {

    let inputRef = useRef(null)
    let [value, setValue] = useState(100)
    const handleValueChange = () => {
        if (inputRef.current.value !== null) {
            setValue(inputRef.current.value)
        }
    }  

    function Participants(props) {
        return (
            <>
                <label htmlFor={props.htmlFor}>{props.label}</label>
                <input ref={inputRef} className="welcome-input" type="number" id={props.id} name={props.name} value={props.value} min="2" max="100" onInput={props.onInput} />
            </>
        )
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleValueChange();
    }

    return (
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Create meeting</legend>
                    <div className="create-meet">
                        <div className="welcome-gui-con">
                            <input className="meeting-btn" type="submit" value="Create" />
                        </div>
                        <MeetingType />
                        <div className="welcome-gui-con">
                            <Participants id="people" htmlFor="people" name="participants" label="Max. participants:" />
                        </div>
                        <div className="welcome-gui-con">
                            <Password pwID="setPW" pwLabel="Use password:" pwName="createMeetingPW" id="showPW" name="hidePW" htmlFor="showPW" label="Show Password" value="createPW" />
                        </div>
                    </div>
                </fieldset>
            </form>
        )
    }

export default CreateMeeting