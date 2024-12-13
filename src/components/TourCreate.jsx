import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Form.css"
import postTour from "../api/post-tour.js";
import {useAuth} from "../hooks/use-auth.js"; 
import useBand from "../hooks/use-band.js";


function CreateTour(props) {
    const { id } = useParams();
    const {auth, setAuth} = useAuth();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        title: '',
        description: '',
        goal: '',
        image: '',
        is_open: true,
        band: id,
    });
        
    const handleChange = (event) => {
        console.log(event.target.name)         
        const name = event.target.name;
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    };

    const handleSubmit= async (event) => {
        event.preventDefault();
        console.log("Logging token", auth.token)
        try {
            const result = await postTour(inputs, auth.token);
            console.log("Success:", result);
            navigate(`/tours/${result.id}`)
            // navigate("/")
        }   catch (error) {
            console.error("Create tour failed:", error)
        }
    }


    return (
        <div className="tour-form">
        <form>
            <div>
                <label htmlFor="title">Tour name:</label>
                <input
                    type="text" 
                    name="title"
                    value={inputs.title} 
                    onChange={handleChange}
                />
            </div>
            {/* <div>
                <label htmlFor="band">Band:</label>
                <input 
                    type="text" 
                    name="band" 
                    value={inputs.band} 
                    onChange={handleChange}
                    />
            </div> */}
            <div>
                <label htmlFor="description">Tour description:</label>
                <input
                    type="text" 
                    name="description" 
                    value={inputs.description} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="goal">Funding goal:</label>
                <input
                    type="number" 
                    name="goal" 
                    value={inputs.goal} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="image">Tour image:</label>
                <input
                    type="url" 
                    name="image" 
                    value={inputs.image} 
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Create Tour
            </button>
            </form>


        </div>)}

        export default CreateTour
