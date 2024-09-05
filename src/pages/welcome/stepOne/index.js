import ProfileIcon from "../../../assets/icons/profileIcon"
import Form from "../../../components/form"
import TextInput from "../../../components/form/textInput"
import {useState} from "react";

const StepOne = ({ data, setData }) => {
    const [profilePicture, setProfilePicture] = useState("")

    const convertToBase64 = (event) => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setProfilePicture(reader.result)
                setData(prevData => ({ ...prevData, profilePicture: reader.result }))
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <>
            <div className="welcome-formheader">
				<h3>Basic info</h3>
			</div>
            <Form className="welcome-form">
                <div className="welcome-form-profileimg">
                    <p className="text-blue1">Photo</p>
                    <div className="welcome-form-profileimg-input">
                        {profilePicture ? (
                            <img src={profilePicture} alt="Avatar Preview" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                        ) : (
                            <ProfileIcon colour="#28C846" background="#64DC78" />
                        )}
                        {/*  TODO: Preview file on upload  */}
                        <input type="file" accept="image/png, image/jpeg" onChange={convertToBase64} />
                    </div>
                    <p className="welcome-form-profileimg-error">
                        Please upload a valid image file
                    </p>
                </div>
                <div className="welcome-form-inputs">
                    <TextInput onChange={setData} value={data.firstName} name="firstName" label={"First name"} />
                    {/*  TODO: Add required attribute to these  */}
                    <TextInput onChange={setData} value={data.lastName} name="lastName" label={"Last name"} />
                    <TextInput
                        onChange={setData}
                        value={data.githubUsername}
                        name="githubUsername"
                        label={"Github Username"}
                    />
                    <p className="text-blue1">*Required</p>
                </div>
            </Form>
        </>
    )
}

export default StepOne