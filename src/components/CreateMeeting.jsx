function CreateMeeting() {

    function Option(props) {
        return (
            <>
                <input type="checkbox" id={props.id} name={props.id} value={props.value} />
                <label for={props.id}>{props.label}</label>
            </>
        )
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        const createMeetingCon = document.getElementsByClassName("create-meet")[0]
        createMeetingCon.appendChild(<Option id="use-chat" value="chat" label="Use Chat" />)
        createMeetingCon.appendChild(<Option id="use-voice" value="voice" label="Audio Call" />)
        createMeetingCon.appendChild(<Option id="use-video" value="video" label="Video Call" />)
    }

    return(
        <form onSubmit={handleSubmit}>
            <fieldset className="create-meet">
                <legend>Create meeting</legend>
                <input type="submit" value="Create" />
            </fieldset>
        </form>
        )
    }

export default CreateMeeting