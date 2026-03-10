function CustomCheckbox({ ref, htmlFor, label, id, name, value, checked, onChange }) {

    return (
        <>
            <label className="checkbox-label" htmlFor={htmlFor}>{label}
                <input ref={ref} type="checkbox" id={id} name={name} value={value} checked={checked} onChange={onChange} />
                <span className="checkmark"></span>
            </label>
        </>
    )
}

export default CustomCheckbox;