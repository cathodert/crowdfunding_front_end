import useBands from "../hooks/use-bands";
import BandCard from "../components/BandCard";
import "./HomePage.css";

function AllBandsPage() {
  const { bands } = useBands();

  return (
    <div>
        <div className="hero">
        <h1>Our bandtogethr bands</h1>
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