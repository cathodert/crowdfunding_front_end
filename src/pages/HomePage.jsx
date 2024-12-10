import useTours from "../hooks/use-tours";
// import useBands from "../hooks/use-bands";
import TourCard from "../components/TourCard";
import "./Pages.css";
import HeroSection from "../components/Hero";
import HeroImage from "../img/hero-yellow.png"

function HomePage() {
  const { tours } = useTours();
  const homeText = {
    title: "bandtogethr",
    subtitle: "bringing metal bands downunder",
    button: "view all tours"
  }
  const allToursLink = "/tours"
  


    return (
    <div className="homepage">
      {/* <div className="hero">
      <img src = "src/img/hero-yellow.png"/>
      <h1>bandtogethr</h1>
      </div> */}
      <div>
      <HeroSection backgroundImage={HeroImage} textContent={homeText} heroLink={allToursLink}/>
      </div>
      <div className="body">
      <p>A platform to raise funds to get international metal bands to include Perth on their tour downunder.</p>
      </div>
      <div id="tour-list">
        {tours.map((tourData, key) => {
          return <TourCard key={key} tourData={tourData} />;
        })}
      </div>
    </div>
    );
  };
  
  export default HomePage;