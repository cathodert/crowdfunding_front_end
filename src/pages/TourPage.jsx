import { useParams } from "react-router-dom";
import { useState } from "react";
import useTour from "../hooks/use-tour";
import useBand from "../hooks/use-band";
import HeroSection from "../components/Hero";
import HeroImage from "../img/hero-red.png"
import CreatePledge from "../components/PledgeCreate";
import "./Pages.css"
import ImagePlaceholder from "../img/image-placeholder.png";
import ImageWithFallback from "../components/ImageError";
// import UpdateTour from "../components/TourUpdate";
// import getUser from "../api/get-user";
// import { useEffect } from "react";




function TourPage() {

  const[displayForm, setDisplayForm] = useState(false)  
  const showForm = () => {setDisplayForm(true)}

// Here we use a hook that comes for free in react router called `useParams` to get the id from the URL so that we can pass it to our useProject hook.
  const { id } = useParams();
  // useProject returns three pieces of info, so we need to grab them all here
  const { tour, isLoading: tourLoading, error: tourError } = useTour(id);

  // useEffect(() => {
  //   if (tour) {
  //     console.log('Tour data:', tour);
  //   }
  // }, [tour]);

  const bandId = tour ? tour.band : null;
  const { band, isLoading: bandLoading, error: bandError } = useBand(bandId); 

  if (tourLoading || (bandId && bandLoading)) {
    return(<p>loading...</p>)
  }

  if (tourError) {
    return (<p>{tourError.message}</p>)
    }

  if (bandError) {
    return (<p>{bandError.message}</p>)
    }

  const homeText = {
      title: `${tour.title}`,      
      subtitle: `tour details page`,
      button: `return to all tours`
    }
  const allToursLink = "/tours"

    return (
        <div className="page">
          <div>
             <HeroSection backgroundImage={HeroImage} textContent={homeText} heroLink={allToursLink}/>
          </div>
          <div>
          <div> 
            { !displayForm ? <button className="button" type="button" onClick={showForm}>
                Support the tour
            </button> : null}
          </div>
          <div className="contact-form">
            {displayForm ? <CreatePledge bandId={bandId}/> : null}
          </div>
          <div>
            <h3>Band:</h3>
            <p>{band?.name}</p>
            <h3>Description</h3>
            <p>{tour.description}</p>
            <h3>Created at: {tour.date_created}</h3>
            <h3>Funding goal: ${tour.goal}</h3>
            <h3>{`Currently accepting funding: ${tour.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
              {tour.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                        {`$${pledgeData.amount} from`} {`${pledgeData.supporter};`}
                        {`Comment: ${pledgeData.comment}`}
                        </li>
                        );
                  })}
              </ul>
              </div>
          </div>
          {/* Could not get PUT function working */}
          {/* <div className="contact-form">
          <UpdateTour/> 
          </div> */}
        </div>
        
      );
}
  
  export default TourPage