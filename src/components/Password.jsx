function Password(props) {
    return (
        <>
            <label htmlFor={props.pwID}>{props.pwLabel}</label>
            <input type="password" id={props.pwID} name={props.pwName} placeholder="none" />
            <input type="checkbox" id={props.showID} name={props.showName} />
            <label htmlFor={props.showID}>{props.showLabel}</label>
        </>
    )
}

export default Password
