import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Form.css"
import postPledge from "../api/post-pledge.js";
import {useAuth} from "../hooks/use-auth.js"; 
import useBand from "../hooks/use-band.js";
import useTour from "../hooks/use-tour.js";
import { useEffect } from "react";


function CreatePledge (props) {
    const { id } = useParams();
    const {auth, setAuth} = useAuth();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        amount: '',
        comment: '',
        anonymous: false,
        tour: id,
        band: props.bandId, 
    });    
    //   console.log(inputs)
    //   console.table(props.bandId)
    
    const handleChange = (event) => {
        console.log(event.target.name)         
        const name = event.target.name;
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    };

    const handleSubmit= async (event) => {
        event.preventDefault();
        console.log("Logging token", auth.token)
        // TODO need to add authentication
        try {
            const result = await postPledge(inputs, auth.token);
            console.log("Success:", result);
            // navigate("/")
        }   catch (error) {
            console.error("Create tour failed:", error)
        }
    }


    return (
        <div className="pledge-form">
        <form>
            {/* <div>
                <label htmlFor="supporter">Supporter:</label>
                <input
                    type="number" 
                    name="supporter"
                    value={inputs.supporter} 
                    onChange={handleChange}
                />
            </div> */}
            <div>
                <label htmlFor="amount">Amount:</label>
                <input 
                    type="number" 
                    name="amount" 
                    value={inputs.amount} 
                    onChange={handleChange}
                    />
            </div>
            <div>
                <label htmlFor="comment">Supporter comment:</label>
                <input
                    type="text" 
                    name="comment" 
                    value={inputs.comment} 
                    onChange={handleChange}
                />
            </div>
            
            <button type="submit" onClick={handleSubmit}>
                Create Pledge
            </button>
            </form>


        </div>)}

        export default CreatePledge
