import useBands from "../hooks/use-bands";
import BandCard from "../components/BandCard";
import CreateBand from "../components/BandCreate";

import "./HomePage.css";
import "../components/Form.css"

function AllBandsPage() {
  const { bands } = useBands();

  return (
    <div>
        <div className="hero">
        <h1>Our bandtogethr bands</h1>
        </div>
        <div>
          <CreateBand />
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