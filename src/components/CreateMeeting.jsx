import { useState } from "react"

function CreateMeeting() {
    const [isVisible, setVisibility] = useState(false)

    function Option(props) {
        if (isVisible) {
            return (
                <>
                    if(props.id==="use-chat") {
                        <input type="checkbox" id={props.id} name="option" value={props.value} checked />
                    } else {
                        <input type="checkbox" id={props.id} name="option" value={props.value} />
                    }
                    <label for={props.id}>{props.label}</label>
                </>
            )
        } 
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        setVisibility(true)
    }

    return(
            <>
                <form onSubmit={handleSubmit}>
                    <fieldset className="create-meet">
                        <legend>Create meeting</legend>
                        <input type="submit" value="Create" />
                        <Option id="use-chat" value="chat" label="Use Chat" checked />
                        <Option id="use-voice" value="voice" label="Audio Call" check="false" />
                        <Option id="use-video" value="video" label="Video Call" check="false" />
                    </fieldset>
                </form>
            </>
        )
    }

export default CreateMeeting