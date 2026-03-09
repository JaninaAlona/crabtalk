import { useState, useEffect } from "react";
import CustomCheckbox from './CustomCheckbox.jsx';

function MeetingType() {
    
    let [checkedChat, setCheckedChat] = useState(true);
    let [checkedVoice, setCheckedVoice] = useState(false);
    let [checkedVideo, setCheckedVideo] = useState(false);

    useEffect(() => {
        if (!checkedVoice && !checkedVideo) {
            setCheckedChat(true);
        }
    }, [checkedVoice, checkedVideo]);

    return (
        <div className="welcome-gui-con">
            <CustomCheckbox id="use-chat" htmlFor="use-chat" name="message-type" value="chat" label="Text Chat" checked={checkedChat} onChange={e => { setCheckedChat(e.target.checked); }} />
            <CustomCheckbox id="use-voice" htmlFor="use-voice" name="message-type" value="voice" label="Audio Call" checked={checkedVoice} onChange={e => { setCheckedVoice(e.target.checked); }} />
            <CustomCheckbox id="use-video" htmlFor="use-video" name="message-type" value="video" label="Video Call" checked={checkedVideo} onChange={e => { setCheckedVideo(e.target.checked); }} />
        </div>
    )
}

export default MeetingType;