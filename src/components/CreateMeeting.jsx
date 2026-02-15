import {v4 as uuidv4} from 'uuid';
import Password from './Password.jsx';
import MeetingType from './MeetingType.jsx';
import Participants from './Participants.jsx';

function CreateMeeting({transferLink}) {

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
        console.log(`UUID: ${uuid}`)
        const meetingLink = await getSHA256Hash(uuid)
        return meetingLink
    }   

    async function createSubmit(e) {
        e.preventDefault()
        const meetingLink = await generateMeetingLink()
        console.log(`Meeting Link: ${meetingLink}`)
        transferLink(meetingLink)
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
                        <Participants id="people" htmlFor="people" name="participants" label="Max. participants:" />
                        <Password pwID="setPW" pwLabel="Use password:" pwName="createMeetingPW" id="showPW" name="hidePW" htmlFor="showPW" label="Show Password" value="createPW" />
                    </div>
                </fieldset>
            </form>
        )
    }

export default CreateMeeting