import useTours from "../hooks/use-tours";
import TourCard from "../components/TourCard";
import CreateTour from "../components/TourCreate";
import { useState } from "react";
import "./pages.css";
import "../components/Form.css"

function AllToursPage() {
  const { tours } = useTours();
  const[displayForm, setDisplayForm] = useState(false)  
  const showForm = () => {setDisplayForm(true)}

  return (
    <div>
      <div className="hero">
        <h1 >See all tours</h1>
      </div>
      <div className="display-form"> 
       { !displayForm ? <button type="Display-form" onClick={showForm}>
                Add a new tour
            </button> : null}
            </div>
        <div className="contact-form">
          {displayForm ? <CreateTour/> : null}
        </div>
      <div id="tour-list">
          {tours.map((tourData, key) => {
            return <TourCard key={key} tourData={tourData} />;
          })}
        </div>
    </div>
   );
  }
  
  export default AllToursPage;