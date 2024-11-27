  import { useParams } from "react-router-dom";
  import useBand from "../hooks/use-band";
  
  function BandPage() {
  // Here we use a hook that comes for free in react router called `useParams` to get the id from the URL so that we can pass it to our useProject hook.
    const { id } = useParams();
    // useProject returns three pieces of info, so we need to grab them all here
  
    const { band, isLoading, error } = useBand(id);
  
    if (isLoading) {
      return(<p>loading...</p>)
    }
  
    if (error) {
      return (<p>{error.message}</p>)
      }
  
  
    return (
        <div>
          <div className="hero">
            <h1>{`Band name: ${band.name}`}</h1>
          </div>
          <div>
            <h2>About</h2>
            <p>{band.description}</p>
            <h2>Band details</h2>
            <h3>Origin: {band.country}</h3>
            <h3>Genre: {`${band.genre}`}</h3>
          </div>
        </div>
    
      );
  }
    


  export default BandPage