import useTours from "../hooks/use-tours";
import useBands from "../hooks/use-bands";
import TourCard from "../components/TourCard";
import BandCard from "../components/BandCard";
// import "./Pages.css";
import "./AllBandsTours.css"
import HeroSection from "../components/Hero";
import HeroImage from "../img/hero-yellow.png"

function HomePage() {
  const { tours } = useTours();
  const { bands } = useBands();
  const homeText = {
    title: "bandtogethr",
    subtitle: "bringing metal bands downunder",
    button: "view all tours"
  }
  const allToursLink = "/tours"
  


    return (
    <div className="main-page">
      <div>
      <HeroSection backgroundImage={HeroImage} textContent={homeText} heroLink={allToursLink}/>
      </div>
      <div className="body">
      <p>A platform to raise funds to get international metal bands to include Perth on their tour downunder.
      <a href="/login" className="button">Join the community</a>
      </p>
      <div>
      <h2>Upcoming tours</h2>
      <div id="tour-list">
        {tours.slice(0,3).map((tourData, key) => {
          return <TourCard key={key} tourData={tourData} />;
        })}
        <div>
        <a href="/tours" className="button">View all tours</a>
        </div>
      </div>
      </div>
      <div>
      <h2>Upcoming tours</h2>
      <div id="band-list">
            {bands.slice(0,3).map((bandData, key) => {
                return <BandCard key={key} bandData={bandData} />;
        })}
        <div>
        <a href="/bands" className="button">View all bands</a>
        </div>
      </div>
      </div>
      </div>

      </div>

    );
  };
  
  export default HomePage;