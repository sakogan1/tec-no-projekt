import { useState } from 'react'
import firebase from '../components/api/firebase'
import { v4 as uuidv4 } from 'uuid';


const Add = () => {
    const db = firebase.firestore()
    const [inputs, setInputs] = useState({ id:uuidv4(), name: "", videoUrl:"" })
    const handleInputs = (event) => {
        setInputs(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    const addToDB = () => {
        db.collection("User_Collections").add({
         ...inputs
        })
    }

   
    return (
        <div className="add">
            <div>
            <h1>Make a Contribution</h1>
            <form>
           <input type="text" name="name" value={inputs.name} onChange={handleInputs} placeholder="Video Name "/>
           <input type="text" name="videoUrl" value={inputs.url} onChange={handleInputs} placeholder="YouTube Link"/>
            </form>
            <button onClick={addToDB} className="addBtn">Add</button>
        </div>
        </div>
    );
}

export default Add;