import useTours from "../hooks/use-tours";
import TourCard from "../components/TourCard";
import CreateTour from "../components/TourCreate";
import { useState } from "react";
import HeroSection from "../components/Hero";
import HeroImage from "../img/hero-blue.png"
import "./Pages.css";
import "../components/Form.css"


function AllToursPage() {
  const { tours } = useTours();
{/* Have removed form from site at this point. May add at some point in future if change way website set up */}  
  // const[displayForm, setDisplayForm] = useState(false)  
  // const showForm = () => {setDisplayForm(true)}
  const homeText = {
    title: "our bandtogethr tours"
  };

  return (
    <div className="main-page">
      <div>
      <HeroSection backgroundImage={HeroImage} textContent={homeText}/>
      </div>
      {/* Have removed this button from site at this point. May add at some point in future if change way website set up */}
      {/* <div className="display-form"> 
       { !displayForm ? <button type="Display-form" onClick={showForm}>
                Add a new tour
            </button> : null}
            </div>
        <div className="contact-form">
          {displayForm ? <CreateTour/> : null}
        </div> */}
      <div id="tour-list">
          {tours.map((tourData, key) => {
            return <TourCard key={key} tourData={tourData} />;
          })}
        </div>
    </div>
   );
  }
  
  export default AllToursPage;