import { useState } from "react"
import TextInput from "../../components/form/textInput"

const Register = () => {
    const [formData, setFormData] = useState({ email: '', password: '' })

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    return (
        <>
            <p>Register</p>

            <div>
                <form>
                    <TextInput value={formData.email} onChange={onChange} name='email' label={'Email *'} />

                    <TextInput value={formData.password} onChange={onChange} name='password' label={'Password *'} type={'password'} />
                </form>
            </div>
        </>
    )
}

export default Register