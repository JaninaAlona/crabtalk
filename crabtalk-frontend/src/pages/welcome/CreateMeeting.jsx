import { v4 as uuidv4 } from 'uuid';
import Password from './Password.jsx';
import MeetingType from './MeetingType.jsx';
import Participants from './Participants.jsx';
import MeetingsService from "../../services/meetings.service";
import { MeetingContext } from "../../contexts/MeetingProvider.jsx";
import { useContext } from 'react';

function CreateMeeting({ transferLink }) {
    const { state, dispatch } = useContext(MeetingContext);

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

    async function prepareMeeting() {
        const meetingLink = generateMeetingLink();
        transferLink(meetingLink);
        dispatch({ type: 'set_meeting_link', payload: meetingLink });
        console.log("meeting: " + state);
    }

    async function createSubmit(e) {
        e.preventDefault();
        prepareMeeting();
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
                        <Password pwID="setPW" pwLabel="Use password:" pwName="createMeetingPW" id="showPW" name="hidePW" htmlFor="showPW" label="Show Password" />
                    </div>
                </fieldset>
            </form>
        )
    }

export default CreateMeeting