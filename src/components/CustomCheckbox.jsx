function CustomCheckbox(props) {
    return (
        <>
            <label className="checkbox-label" htmlFor={props.htmlFor}>{props.label}
                <input ref={props.ref} type="checkbox" id={props.id} name={props.name} value={props.value} checked={props.checked} onChange={props.onChange} />
                <span className="checkmark"></span>
            </label>
        </>
    )
}

export default CustomCheckbox