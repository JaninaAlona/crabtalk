import { useState } from "react";
import { useRef } from 'react';
import CustomCheckbox from './CustomCheckbox.jsx';

function MeetingType() {
    
    let [checkedChat, setCheckedChat] = useState(true)
    const handleCheckedChatChange = e => {
        setCheckedChat(e.target.checked)
        if (!chatRef.current.checked && !voiceRef.current.checked && !videoRef.current.checked) {
            setCheckedChat(true)
        }
    }
    let [checkedVoice, setCheckedVoice] = useState(false)
    const handleCheckedVoiceChange = e => {
        setCheckedVoice(e.target.checked)
        if (!chatRef.current.checked && !voiceRef.current.checked && !videoRef.current.checked) {
            setCheckedVoice(true)
        }
    }
    let [checkedVideo, setCheckedVideo] = useState(false)
    const handleCheckedVideoChange = e => {
        setCheckedVideo(e.target.checked)
        if (!chatRef.current.checked && !voiceRef.current.checked && !videoRef.current.checked) {
            setCheckedVideo(true)
        }
    }
    let chatRef = useRef(null)
    let voiceRef = useRef(null)
    let videoRef = useRef(null)

    function MediaOption(props) {
        return (
            <CustomCheckbox ref={props.ref} htmlFor={props.htmlFor} label={props.label} id={props.id} name={props.name} value={props.value} checked={props.checked} onChange={props.onChange} />
        )
    }

    return (
        <div className="welcome-gui-con">
            <MediaOption ref={chatRef} id="use-chat" htmlFor="use-chat" name="message-type" value="chat" label="Text Chat" checked={checkedChat} onChange={handleCheckedChatChange} />
            <MediaOption ref={voiceRef} id="use-voice" htmlFor="use-voice" name="message-type" value="voice" label="Audio Call" checked={checkedVoice} onChange={handleCheckedVoiceChange} />
            <MediaOption ref={videoRef} id="use-video" htmlFor="use-video" name="message-type" value="video" label="Video Call" checked={checkedVideo} onChange={handleCheckedVideoChange} />
        </div>
    )
}

export default MeetingType