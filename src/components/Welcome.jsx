import { useState } from "react";
import JoinMeeting from "./JoinMeeting.jsx"
import CreateMeeting from "./CreateMeeting.jsx"

function Welcome() {
    const [link, setLink] = useState('');
    
    const transferLink = (transferredLink) => {
        setLink(transferredLink)
    }
    
    return (
        <>
        <JoinMeeting transferLink={link} />
        <CreateMeeting transferLink={transferLink} />
        </>
    )
}

export default Welcome