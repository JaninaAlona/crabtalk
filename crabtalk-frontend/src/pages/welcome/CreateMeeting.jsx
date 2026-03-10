import { v4 as uuidv4 } from 'uuid';
import Password from './Password';
import MeetingType from './MeetingType';
import Participants from './Participants';
import MeetingsService from "../../services/meetings.service";
import { useRef, useState, useContext } from 'react';
import DefaultMeeting from '../../contexts/DefaultMeeting';
import { MeetingContext } from '../../contexts/Contexts';

function CreateMeeting({ transferLink }) {
    const { meeting, setMeeting } = useContext(MeetingContext);
    const passwordRef = useRef(null);
    const [submitted, setSubmitted] = useState(false);
    const [meeting_id, setMeetingId] = useState(DefaultMeeting.meeting_id);
    const [meeting_link, setMeetingLink] = useState(DefaultMeeting.meeting_link);
    const [meeting_password, setMeetingPassword] = useState(DefaultMeeting.meeting_password);
    const [text_chat, setTextChat] = useState(DefaultMeeting.text_chat);
    const [audio_chat, setAudioChat] = useState(DefaultMeeting.audio_chat);
    const [video_chat, setVideoChat] = useState(DefaultMeeting.video_chat);
    const [max_talkers, setMaxTalkers] = useState(DefaultMeeting.max_talkers);
    const [chat_in_progress, setChatInProgress] = useState(DefaultMeeting.chat_in_progress);
    const [chat_started, setChatStarted] = useState(DefaultMeeting.chat_started);
    const [chat_created, setChatCreated] = useState(DefaultMeeting.chat_created);

    async function getSHA256Hash(input) {
        const textAsBuffer = new TextEncoder().encode(input);
        const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hash = hashArray
            .map((item) => item.toString(16).padStart(2, "0"))
            .join("");
        return hash;
    }

    async function generateMeetingLink() {
        const uuid = uuidv4();
        const meetingLink = await getSHA256Hash(uuid);
        return meetingLink;
    }  

    function readMeetingProperty(ref, property) {
        const currentRef = ref.current;
        console.log("property: " + property);
        let meetingProperty;
        if (currentRef) {
            meetingProperty = currentRef[property];
        }
        return meetingProperty;
    }

    async function prepareMeeting() {
        const meetingLink = await generateMeetingLink();
        transferLink(meetingLink);
        const newMeeting = () => {
            setMeetingId(uuidv4());
            setMeetingLink(meetingLink);
            setMeetingPassword(readMeetingProperty(passwordRef, 'pwValue'));
            console.log(readMeetingProperty(passwordRef, 'pwValue'))
        }
    }    

    const saveMeeting = () => {
        const data = { meeting_id, meeting_link, meeting_password, text_chat, audio_chat, video_chat, max_talkers, chat_in_progress, chat_started, chat_created };
        MeetingsService.create(data)
            .then((response) => {
                console.log(response.data);
                setSubmitted(true);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    async function createSubmit(e) {
        e.preventDefault();
        prepareMeeting();
        saveMeeting();
    }

    return (
            <form onSubmit={createSubmit}>
                <fieldset>
                    <legend>Create meeting</legend>
                    <div className="create-meet">
                        <div className="welcome-gui-con">
                            <input className="meeting-btn" type="submit" value="Create" />
                        </div>
                        <MeetingType />
                        <Participants id="people" htmlFor="people" name="participants" label="Max. crabtalkers:" />
                        <Password ref={passwordRef} pwID="setPW" pwLabel="Use password:" pwName="createMeetingPW" id="showPW" name="hidePW" htmlFor="showPW" label="Show Password" />
                    </div>
                </fieldset>
            </form>
        )
    }

export default CreateMeeting