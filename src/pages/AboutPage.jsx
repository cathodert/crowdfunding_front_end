import HeroSection from "../components/Hero";
import HeroImage from "../img/hero-band-yellow.png"
import "./Pages.css";


function AboutPage() {

  const homeText = {
    title: "about bandtogethr"
    }

  return (
      <div>
        <div>
          <HeroSection backgroundImage={HeroImage} textContent={homeText}/>
        </div>
        <div>
          <p>
          This platform is inteded to help international (and interstate) heavy metal bands to come to Perth. It is designed to support bands with smaller audiences that would not be able to tour Perth and is not intended for high-profile or mainstream metal bands that would perform in large venues.
          </p>
        </div>
      </div>
  )
        
  }
  
  export default AboutPage;