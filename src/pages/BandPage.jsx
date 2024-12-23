  import { useParams } from "react-router-dom";
  import { useState, useEffect } from "react";
  import useBand from "../hooks/use-band";
  import CreateTour from "../components/TourCreate";
  import HeroSection from "../components/Hero";
  import HeroImage from "../img/hero-band-yellow.png"
  import { useAuth } from "../hooks/use-auth";
  import PageNotFound from "../components/PageNotFound";
  import NotAuthorised from "../components/Error";
  import "./Pages.css"
  import ImagePlaceholder from "../img/image-placeholder.png";
  import ImageWithFallback from "../components/ImageError";

  
  function BandPage() {
    const {auth, setAuth} = useAuth();
    const[displayForm, setDisplayForm] = useState(false);  
    const showForm = () => {setDisplayForm(true); } 

    const { id } = useParams();
    const { band, isLoading, error } = useBand(id);

    useEffect(() => { 
      if (band && auth.user_id) { 
        // console.log("Logged-in user ID:", auth.user_id); 
        // console.log("Band owner ID:", band.owner); 
        // console.log("Comparison result:", String(auth.user_id) === String(band.owner));
      } 
    }, [band, auth.user_id]);

    if (isLoading) {
      return (<p>loading...</p>)
    }

    // if (response.status === 401) {
    //  {NotAuthorised}
    // }

    if (error) {
      return (<p>{error.message}</p>)
    }

    const homeText = {
      title: `${band.name}`,
      subtitle: `band details page`,
      button: `return to all bands`
     }
    const allBandsLink = "/bands"
    
    const isBandOwner = String(auth.user_id) === String(band.owner)

    return (
        <div className="page">
            <div>
              <HeroSection backgroundImage={HeroImage} textContent={homeText} heroLink={allBandsLink}/>
            </div>
            <div>
          {isBandOwner && ( 
            <> 
            <button className="button" type="button" onClick={showForm}> 
            Add a new tour 
            </button> 
            {displayForm && <CreateTour />} 
            </>
          )}

          <div>
            <h2>About</h2>
            <p>{band.description}</p>
            <h3>Country</h3>
            <p>{band.country}</p>
            <h3>Website</h3>
            <p> <a href="`{band.website}">{band.website}</a></p>
            {/* <h3>Genre: {`${band.genre}`}</h3> */}
          </div>
          <div className="band-tour">
          <ImageWithFallback
          src={band.cover_image}
          alt="Band cover image"
          placeholder={ImagePlaceholder}
        />
          </div>
          {/* <h2>Created by:</h2>
          <p>{band.owner}</p> */}
        </div>   
        </div>
      );
  }
    


  export default BandPage