import { useState } from "react"
import Password from "./Password"

function CreateMeeting() {

    function MediaOption(props) {
        return (
            <>
                <input type="checkbox" id={props.id} name={props.name} value={props.value} checked={props.checked} />
                <label for={props.id}>{props.label}</label>
            </>
        )
    }

    function Participants(props) {
        return (
            <>
                <label for={props.id}>{props.label}</label>
                <input type="number" id={props.id} name={props.name} value="100" min="2" max="100" />
            </>
        )
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    return(
            <>
                <form onSubmit={handleSubmit}>
                    <fieldset className="create-meet">
                        <legend>Create meeting</legend>
                        <input type="submit" value="Create" />
                        <MediaOption id="use-chat" name="message-type" value="chat" label="Text Chat" checked="checked" />
                        <MediaOption id="use-voice" name="message-type" value="voice" label="Audio Call" />
                        <MediaOption id="use-video" name="message-type" value="video" label="Video Call" />
                        <Participants id="people" label="Max. participants:" />
                        <Password pwID="setPW" pwLabel="Use password:" pwName="meetingPW" showID="showPW" showName="showPW" value="no" showLabel="Show Password" />
                    </fieldset>
                </form>
            </>
        )
    }

export default CreateMeeting