const TextInput = ({ value, onChange, name, label, type = 'text' }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} />
        </>
    )
}

export default TextInput