import { useState } from "react";
import firebase from '../components/api/firebase'
import {Link} from "react-router-dom"
import "../assets/css/Login.css"
import Home from "../components/Home";
import MiddleComponentSpotify from "./api/middleComponentSpotify";
const LoginFirebase = (props) => {
    const [inputs, setInputs] = useState({
        email: "", password: ""
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
    const loginUser = () => {
       
        firebase.auth().signInWithEmailAndPassword(inputs.email, inputs.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user)
                props.setUser(user)
                localStorage.setItem('token', JSON.stringify(user));
                setErrors(null)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setErrors(errorMessage, errorCode)
            });
    }
    // const signOut = () => {
    //     firebase.auth().signOut().then(() => {
    //         props.setUser(null)
    //     }).catch((error) => {
    //     });
    // }

    return (
       
       <div className="login">
 {props.user ? <>
           <MiddleComponentSpotify/>
  </> :  <>
  <h1>Became a Techno Fan</h1>
            <form >
                <input type="email" name="email" onChange={handleInputs} placeholder="Email" />
                <input type="password" name="password" onChange={handleInputs} placeholder="Password" />
                <p>{errors}</p>
            </form>
            <button onClick={loginUser}>Login</button>
        <p>Not a Fan?<br/></p>
        <Link to="/register"> Join the movement</Link>
   
<h1>or use</h1>
<Home/>
  </>}
        </div>
     
    );
}

export default LoginFirebase;