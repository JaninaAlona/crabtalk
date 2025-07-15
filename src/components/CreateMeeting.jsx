function CreateMeeting() {

    function handleSubmit(e) {
        e.preventDefault()
        console.log("here")
    }

    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Create meeting</legend>
                <input type="submit" value="Create" />
            </fieldset>
        </form>
        )
    }

export default CreateMeeting