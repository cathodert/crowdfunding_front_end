import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css"
import postBand from "../api/post-band.js";


function CreateBand() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        bandName: '',
        country: '',
        description: '',
        cover_image: '',
        url: ''
    });
        
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    };

    const handleSubmit= async (event) => {
        event.preventDefault();
        try {
            const result = await postBand(inputs);
            console.log("Success:", result);
            // navigate("/bands/${bandId}")
            navigate("/")
        }   catch (error) {
            console.error("Create band failed:", error)
        }
    }


    return (
        <form>
            <div>
                <label htmlFor="bandName">Band name:</label>
                <input
                    type="text" 
                    name="bandName"
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
                <label htmlFor="bandDescription">Band description:</label>
                <input
                    type="text" 
                    name="bandDescription" 
                    value={inputs.description} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="bandImage">Band cover image:</label>
                <input
                    type="url" 
                    name="cover_image" 
                    value={inputs.cover_image} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="bandWebsite">Band website:</label>
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
            );
        }
   
        export default CreateBand;
