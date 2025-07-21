import { useState } from "react";
import { useRef } from 'react';
import Password from './Password.jsx';
import CustomCheckbox from './CustomCheckbox.jsx';

function CreateMeeting() {

    let inputRef = useRef(null)
    let [value, setValue] = useState(100)
    const handleValueChange = () => {
        if (inputRef.current.value !== null) {
            setValue(inputRef.current.value)
        }
    }
    let [checkedChat, setCheckedChat] = useState(true)
    const handleCheckedChatChange = e => {
        setCheckedChat(e.target.checked)
    }
    let [checkedVoice, setCheckedVoice] = useState(false)
    const handleCheckedVoiceChange = e => {
        setCheckedVoice(e.target.checked)
    }
    let [checkedVideo, setCheckedVideo] = useState(false)
    const handleCheckedVideoChange = e => {
        setCheckedVideo(e.target.checked)
    }

    function MediaOption(props) {
        return (
            <CustomCheckbox htmlFor={props.htmlFor} label={props.label} id={props.id} name={props.name} value={props.value} checked={props.checked} onChange={props.onChange} />
        )
    }

    function Participants(props) {
        return (
            <>
                <label htmlFor={props.htmlFor}>{props.label}</label>
                <input ref={inputRef} className="welcome-input" type="number" id={props.id} name={props.name} value={props.value} onInput={props.onInput} />
            </>
        )
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleValueChange();
    }

    return(
            <>
                <form onSubmit={handleSubmit}>
                    <fieldset className="create-meet">
                        <legend>Create meeting</legend>
                        <div>
                            <div className="welcome-gui-con">
                                <input className="meeting-btn" type="submit" value="Create" />
                            </div>
                            <div className="welcome-gui-con">
                                <MediaOption id="use-chat" htmlFor="use-chat" name="message-type" value="chat" label="Text Chat" checked={checkedChat} onChange={handleCheckedChatChange} />
                                <MediaOption id="use-voice" htmlFor="use-voice" name="message-type" value="voice" label="Audio Call" checked={checkedVoice} onChange={handleCheckedVoiceChange} />
                                <MediaOption id="use-video" htmlFor="use-video" name="message-type" value="video" label="Video Call" checked={checkedVideo} onChange={handleCheckedVideoChange} />
                            </div>
                            <div className="welcome-gui-con">
                                <Participants id="people" htmlFor="people" name="participants" label="Max. participants:" />
                            </div>
                            <div className="welcome-gui-con">
                                <Password pwID="setPW" pwLabel="Use password:" pwName="createMeetingPW" id="showPW" name="hidePW" htmlFor="showPW" label="Show Password" value="createPW" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }

export default CreateMeeting