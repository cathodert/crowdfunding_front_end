import useBands from "../hooks/use-bands";
import BandCard from "../components/BandCard";
import CreateBand from "../components/BandCreate";
import { useState } from "react";

import "./pages.css";
import "../components/Form.css"

function AllBandsPage() {
  const { bands } = useBands();
  const[displayForm, setDisplayForm] = useState(false)  

  return (
    <div>
        <div className="hero">
        <h1>Our bandtogethr bands</h1>
        </div>
        <div className="contact-form">
          <CreateBand />
        </div>
        <div className="display-form"  onClick={() => {
        setDisplayForm(!displayForm)
       }}>
        <button type="Display-form">
                Add a new band
            </button>
            </div>
        <div id="band-list">
            {bands.map((bandData, key) => {
                return <BandCard key={key} bandData={bandData} />;
        })}
        </div>
    </div>
   );
  }
  
  export default AllBandsPage;