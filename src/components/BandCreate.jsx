import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css"
import postBand from "../api/post-band.js";
import {useAuth} from "../hooks/use-auth.js"; 
import NotAuthorised from "./Error.jsx";


function CreateBand() {
    const {auth, setAuth} = useAuth();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: '',
        country: '',
        description: '',
        cover_image: '',
        website: ''
    });
    const [error, setError] = useState(null);

        
    const handleChange = (event) => {
        // console.log(event.target.name)         
        const name = event.target.name;
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    };

    const handleSubmit= async (event) => {
        event.preventDefault();
        // console.log("Logging token", auth.token)
        // TODO need to add authentication

        try {
            const result = await postBand(inputs, auth.token);
            console.log("Message:", result);
            navigate(`/bands/${result.id}`)
        }   catch (error) {
            console.error("Create band failed:", error)
            navigate(NotAuthorised)
        }
    }


    return (
        <div className="band-form">
        {error === "Not Authorised" ? ( <NotAuthorised /> ) : (
        <form>
            <div>
                <label htmlFor="name">Band name:</label>
                <input
                    type="text" 
                    name="name"
                    value={inputs.bandName} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="country">Country of origin:</label>
                <input 
                    type="text" 
                    name="country" 
                    value={inputs.country} 
                    onChange={handleChange}
                    />
            </div>
            <div>
                <label htmlFor="description">Band description:</label>
                <input
                    type="text" 
                    name="description" 
                    value={inputs.description} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="cover_image">Band cover image:</label>
                <input
                    type="url" 
                    name="cover_image" 
                    value={inputs.cover_image} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="website">Band website:</label>
                <input
                    type="url" 
                    name="website" 
                    value={inputs.website} 
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Create Band
            </button>
            </form>
        )}

        </div>)}

        export default CreateBand
