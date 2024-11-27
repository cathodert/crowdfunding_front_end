import useTours from "../hooks/use-tours";
import TourCard from "../components/TourCard";
import "./Global.css";

function AllToursPage() {
  const { tours } = useTours();

  return (
    <div>
      <div className="hero">
        <h1 >See all tours</h1>
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