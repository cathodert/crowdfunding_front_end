  import { useParams } from "react-router-dom";
  import { useState } from "react";
  import useBand from "../hooks/use-band";
  import useOwner from "../hooks/use-owner";
  import CreateTour from "../components/TourCreate";

  
  function BandPage() {
  // Here we use a hook that comes for free in react router called `useParams` to get the id from the URL so that we can pass it to our useProject hook.
    const[displayForm, setDisplayForm] = useState(false)  
    const showForm = () => {setDisplayForm(true)}

    const { id } = useParams();
  
    const { band, isLoading, error } = useBand(id);

    if (isLoading) {
      return (<p>loading...</p>)
    }

    if (error) {
      return (<p>{error.message}</p>)
    }
    // const { band, isLoading: bandLoading, error: bandError } = useBand(id)

    // const userId = band ? band.owner : null;
    // const { user, isLoading: userLoading, error: userError } = useOwner(userId);

    // console.log("Fetching user within BandPage funtion with id", userId)
  
    // if (bandLoading || userId && userLoading) {
    //   return(<p>loading...</p>)
    // }
  
    // if (bandError) {
    //   return (<p>{bandError.message}</p>)
    //   }
    // if (userError) {
    //   return (<p>{userError.message}</p>)
    //   }


    return (
        <div>
          <div className="hero">
            <h1>{`${band.name}`}</h1>
          </div>
          <div>
            <h2>About</h2>
            <p>{band.description}</p>
            {/* <p>{user?.username}</p> */}
            <h3>Country</h3>
            <p>{band.country}</p>
            <h3>Website</h3>
            <p> <a href="`{band.website}">{band.website}</a></p>
            {/* <h3>Genre: {`${band.genre}`}</h3> */}
          </div>
          <div className="display-form"> 
              { !displayForm ? <button type="Display-form" onClick={showForm}>
                Add a new tour
            </button> : null}
            </div>
          <div className="contact-form">
          {displayForm ? <CreateTour/> : null}
          </div>
        </div>
    
      );
  }
    


  export default BandPage