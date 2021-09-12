import { useState } from "react";
import firebase from '../components/api/firebase'
import "../assets/css/Login.css"
import {NavLink } from 'reactstrap';



const Home = (props) => {
    const [inputs, setInputs] = useState({
        email: "", password: "", passwordConfirm: ""
    })
    const [errors, setErrors] = useState(null)
    const handleInputs = event => {
        setInputs(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    const registerUser = () => {
        if (inputs.password === inputs.passwordConfirm) {
            firebase.auth().createUserWithEmailAndPassword(inputs.email, inputs.password)
                .then((userCredential) => {
                    // Signed in 
                    console.log(userCredential)
                    var user = userCredential.user;
                    props.setUser(user)
                    setErrors(null)
                })
                .catch((error) => {
                    console.log(error)
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    setErrors(errorMessage,errorCode)
                });

        } else {
            setErrors('Wrong Password')
        }
    }
    return (
        <div className="register">
            <h1>Register for Techno</h1>
            <form>
                <input type="email" name="email" onChange={handleInputs} placeholder="Mail" />
                <input type="password" name="password" onChange={handleInputs} placeholder="Password" />
                <input type="password" name="passwordConfirm" onChange={handleInputs} placeholder="Password confirmation" />
            </form>
            <button onClick={registerUser}>Register</button>
            <br/>
            <br/>

            <NavLink href="/"><button> Back to Login</button></NavLink>
            {errors}
        </div>
    );
}

export default Home;