import { useState, useEffect, forwardRef, useRef, useImperativeHandle } from "react";
import CustomCheckbox from './CustomCheckbox';

const MeetingType = forwardRef(function MeetingType(props, ref) {
    const chatRef = useRef();
    const voiceRef = useRef();
    const videoRef = useRef();
    const [checkedChat, setCheckedChat] = useState(true);
    const [checkedVoice, setCheckedVoice] = useState(false);
    const [checkedVideo, setCheckedVideo] = useState(false);
    const [valueWhenCheckedChat, setValueWhenCheckedChat] = useState(true);
    const [valueWhenCheckedVoice, setValueWhenCheckedVoice] = useState(false);
    const [valueWhenCheckedVideo, setValueWhenCheckedVideo] = useState(false);

    useImperativeHandle(ref, () => ({
        get chat() { return chatRef.current; },
        get voice() { return voiceRef.current; },
        get video() { return videoRef.current; },
    }));

    useEffect(() => {
        if (!checkedVoice && !checkedVideo) {
            setCheckedChat(true);
        }
    }, [checkedVoice, checkedVideo]);

    return (
        <div className="welcome-gui-con">
            <CustomCheckbox ref={chatRef} id="use-chat" htmlFor="use-chat" name="message-type" value={valueWhenCheckedChat} label="Text Chat" checked={checkedChat} onChange={e => { setCheckedChat(e.target.checked); setValueWhenCheckedChat(e.target.checked); }} />
            <CustomCheckbox ref={voiceRef} id="use-voice" htmlFor="use-voice" name="message-type" value={valueWhenCheckedVoice} label="Audio Call" checked={checkedVoice} onChange={e => { setCheckedVoice(e.target.checked); setValueWhenCheckedVoice(e.target.checked); }} />
            <CustomCheckbox ref={videoRef} id="use-video" htmlFor="use-video" name="message-type" value={valueWhenCheckedVideo} label="Video Call" checked={checkedVideo} onChange={e => { setCheckedVideo(e.target.checked); setValueWhenCheckedVideo(e.target.checked); }} />
        </div>
    )
});

export default MeetingType;