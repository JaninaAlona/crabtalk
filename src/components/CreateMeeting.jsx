import Password from './Password.jsx';
import MeetingType from './MeetingType.jsx';
import Participants from './Participants.jsx';

function CreateMeeting() {

    function handleSubmit(e) {
        e.preventDefault()
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
                        <Participants id="people" htmlFor="people" name="participants" label="Max. participants:" />
                        <Password pwID="setPW" pwLabel="Use password:" pwName="createMeetingPW" id="showPW" name="hidePW" htmlFor="showPW" label="Show Password" value="createPW" />
                    </div>
                </fieldset>
            </form>
        )
    }

export default CreateMeeting