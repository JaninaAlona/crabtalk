import Password from './Password.jsx';

function JoinMeeting() {
    
    function handleSubmit(e) {
        e.preventDefault()
    }
     
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Join meeting</legend>
                <div className="create-meet">
                    <div className="welcome-gui-con vertical">
                        <div className='vertical'>
                            <input className="meeting-btn" type="submit" value="Join" />
                        </div>
                        <input className="meeting-link welcome-input" placeholder="Meeting link" />
                    </div>
                    <div className="welcome-gui-con">
                        <Password pwID="meetingPW" pwLabel="Password:" pwName="meetingPW" id="showMeetingPW" name="hideMeetingPW" htmlFor="showMeetingPW" label="Show Password" value="usePW" />
                    </div>
                </div>
            </fieldset>
        </form>
    )
}

export default JoinMeeting