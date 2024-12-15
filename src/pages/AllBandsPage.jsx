import useBands from "../hooks/use-bands";
import BandCard from "../components/BandCard";
import CreateBand from "../components/BandCreate";
import { useState } from "react";
import HeroSection from "../components/Hero";
import HeroImage from "../img/hero-band-yellow.png"
import "../components/BandCard.css"
import "./AllBandsTours.css";
import "../components/Form.css"

function AllBandsPage() {
  const { bands } = useBands();
  const[displayForm, setDisplayForm] = useState(false)  
  const showForm = () => {setDisplayForm(true)}
  const homeText = {
    title: "our community",
    subtitle: "the bandtogethr bands",
    button: "view tours"
  }
  const allToursLink = "/tours"
  

  return (
    <div className="main-page">
        <div>
          <HeroSection backgroundImage={HeroImage} textContent={homeText} heroLink={allToursLink}/>
        </div>
        <div className="body-default">
        {/* <div className="band-button">  */}
       { !displayForm ? <button className="form-button" type="Display-form" onClick={showForm}>
                Add a new band
            </button> : null}
            {/* </div>       */}
        {/* <div className="band-form"> 
       { !displayForm ? <button className="button" type="Display-form" onClick={showForm}>
                Add a new band
            </button> : null}
            </div> */}
        {/* <div className="body"> */}
        <div>
          {displayForm ? <CreateBand /> : null}
        </div>
        <div className="body-tours-bands">
        <div id="band-list">
            {bands.map((bandData, key) => {
                return <BandCard key={key} bandData={bandData} />;
        })}
        </div>
        </div>
        </div>
    </div>
   );
  }
  
  export default AllBandsPage;