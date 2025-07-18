function Password(props) {
    return (
        <>
            <label for={props.pwID}>{props.pwLabel}</label>
            <input type="password" id={props.pwID} name={props.pwName} />
            <input type="checkbox" id={props.showID} name={props.showName} value={props.value} />
            <label for={props.showID}>{props.showLabel}</label>
        </>
    )
}

export default Password
