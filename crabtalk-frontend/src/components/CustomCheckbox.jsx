function CustomCheckbox({htmlFor, label, id, name, value, checked, onChange}) {
    return (
        <>
            <label className="checkbox-label" htmlFor={htmlFor}>{label}
                <input type="checkbox" id={id} name={name} value={value} checked={checked} onChange={onChange} />
                <span className="checkmark"></span>
            </label>
        </>
    )
}

export default CustomCheckbox