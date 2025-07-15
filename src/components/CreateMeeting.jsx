function CreateMeeting() {

    function handleSubmit(e) {
        e.preventDefault()
        console.log("here")
    }

    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Create meeting</legend>
                <button>Create</button>
            </fieldset>
        </form>
        )
    }

export default CreateMeeting