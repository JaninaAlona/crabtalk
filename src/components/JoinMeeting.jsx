function JoinMeeting() {
    
    function handleSubmit(e) {
        e.preventDefault()
    }
     
    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Join meeting</legend>
                <input placeholder="Meeting link" />
                <input type="submit" value="Join" />
            </fieldset>
        </form>
    )
}

export default JoinMeeting