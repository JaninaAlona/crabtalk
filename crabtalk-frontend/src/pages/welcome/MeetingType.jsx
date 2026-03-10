import { useState, useEffect } from "react";
import CustomCheckbox from './CustomCheckbox';

function MeetingType() {
    
    const [checkedChat, setCheckedChat] = useState(true);
    const [checkedVoice, setCheckedVoice] = useState(false);
    const [checkedVideo, setCheckedVideo] = useState(false);
    const [valueWhenCheckedChat, setValueWhenCheckedChat] = useState(true);
    const [valueWhenCheckedVoice, setValueWhenCheckedVoice] = useState(false);
    const [valueWhenCheckedVideo, setValueWhenCheckedVideo] = useState(false);

    useEffect(() => {
        if (!checkedVoice && !checkedVideo) {
            setCheckedChat(true);
        }
    }, [checkedVoice, checkedVideo]);

    return (
        <div className="welcome-gui-con">
            <CustomCheckbox id="use-chat" htmlFor="use-chat" name="message-type" value={valueWhenCheckedChat} label="Text Chat" checked={checkedChat} onChange={e => { setCheckedChat(e.target.checked); setValueWhenCheckedChat(e.target.checked); }} />
            <CustomCheckbox id="use-voice" htmlFor="use-voice" name="message-type" value={valueWhenCheckedVoice} label="Audio Call" checked={checkedVoice} onChange={e => { setCheckedVoice(e.target.checked); setValueWhenCheckedVoice(e.target.checked); }} />
            <CustomCheckbox id="use-video" htmlFor="use-video" name="message-type" value={valueWhenCheckedVideo} label="Video Call" checked={checkedVideo} onChange={e => { setCheckedVideo(e.target.checked); setValueWhenCheckedVideo(e.target.checked); }} />
        </div>
    )
}

export default MeetingType;