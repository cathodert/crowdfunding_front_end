import useTours from "../hooks/use-tours";
import TourCard from "../components/TourCard";
import "./HomePage.css";

function HomePage() {
  const { tours } = useTours();

  return (
    <div id="tours-list">
      {tours.map((tourData, key) => {
        return <TourCard key={key} tourData={tourData} />;
      })}
    </div>
   );
  }
  
  export default HomePage;