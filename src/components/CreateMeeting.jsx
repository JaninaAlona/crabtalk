import { useState } from "react"

function CreateMeeting() {
    let [isVisible, setVisibility] = useState(0)

    function MediaOption(props) {
        if (isVisible===1) {
            return (
                <>
                    <input type="checkbox" id={props.id} name="option" value={props.value} checked={props.checked} />
                    <label for={props.id}>{props.label}</label>
                </>
            )
        } 
    }

    function Participants() {
        if (isVisible===1) {
            return (
                <>
                    <label for={props.id}>{props.label}</label>
                    <input type="number" id={props.id} name="option" min="2" max="100" />
                </>
            )
        } 
    }

    function handleSubmit(e) {
        e.preventDefault()
        setVisibility(isVisible++)
    }

    return(
            <>
                <form onSubmit={handleSubmit}>
                    <fieldset className="create-meet">
                        <legend>Create meeting</legend>
                        <input type="submit" value="Create" />
                        <MediaOption id="use-chat" value="chat" label="Use Chat" checked="checked" />
                        <MediaOption id="use-voice" value="voice" label="Audio Call" />
                        <MediaOption id="use-video" value="video" label="Video Call" />
                        <Participants id="people" label="Maximum number of participants:" />
                    </fieldset>
                </form>
            </>
        )
    }

export default CreateMeeting