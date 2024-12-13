import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Form.css"
import getTour from "../api/get-tour.js";
import {useAuth} from "../hooks/use-auth.js"; 
import useBand from "../hooks/use-band.js";
import putTour from "../api/put-tour.js";


function UpdateTour(props) {
    const { id } = useParams();
    const {auth, setAuth} = useAuth();
    const navigate = useNavigate();
    const [tourData, updateTourData] = useState({
        tour: id,
        title: "",
        description: "",
        goal: "",
        image: "",
        is_open: true,
        band: props.id,
    });
    
    useEffect(() => { 
        getTour(id).then((data) => { 
            setTourData(data); 
        }).catch((error) => { 
            console.error('Fetch failed:', error); 
        }); 
    }, [id]);
    
    const handleChange = (event) => {
        console.log(event.target.name)         
        const name = event.target.name;
        const value = event.target.value
        setTourData(values => ({...values, [name]: value}))
    };

    const handleSubmit= async (event) => {
        event.preventDefault();
        console.log("Logging token", auth.token)
        // TODO need to add authentication
        try {
            const result = await putTour(tourData, auth.token);
            console.log("Success:", result);
            navigate(`/tours/${result.id}`)
            // navigate("/")
        }   catch (error) {
            console.error("Update tour failed:", error)
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
                    // value={tourData.title} 
                    onChange={handleChange}
                />
            </div>
            {/* <div>
                <label htmlFor="band">Band:</label>
                <input 
                    type="text" 
                    name="band" 
                    value={tourData.band} 
                    // onChange={handleChange}
                    />
            </div> */}
            <div>
                <label htmlFor="description">Tour description:</label>
                <input
                    type="text" 
                    name="description" 
                    // value={tourData.description} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="goal">Funding goal:</label>
                <input
                    type="number" 
                    name="goal" 
                    // value={tourData.goal} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="image">Tour image:</label>
                <input
                    type="url" 
                    name="image" 
                    // value={tourData.image} 
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Update Tour
            </button>
            </form>


        </div>)}

        export default UpdateTour
