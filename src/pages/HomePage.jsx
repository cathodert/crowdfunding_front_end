import useTours from "../hooks/use-tours";
// import useBands from "../hooks/use-bands";
import TourCard from "../components/TourCard";
import "./HomePage.css";

function HomePage() {
  const { tours } = useTours();
  // const { bands } = useBands():

  return (
    <div>
      <div className="hero">
      <h1>bandtogethr: getting metal bands to Perth</h1>
      <p>A platform to raise funds to get international metal bands to include Perth on their tour downunder.</p>
      </div>
      <div id="tour-list">
        {tours.map((tourData, key) => {
          return <TourCard key={key} tourData={tourData} />;
        })}
      </div>
    </div>
    );
  }
  
  export default HomePage;