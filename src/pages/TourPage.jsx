import { useParams } from "react-router-dom";
import useTour from "../hooks/use-tour";


function TourPage() {
// Here we use a hook that comes for free in react router called `useParams` to get the id from the URL so that we can pass it to our useProject hook.
  const { id } = useParams();
  // useProject returns three pieces of info, so we need to grab them all here

  const { tour, isLoading, error } = useTour(id);

  if (isLoading) {
    return(<p>loading...</p>)
  }

  if (error) {
    return (<p>{error.message}</p>)
    }


  return (
      <div>
        <div className="hero">
          <h2>{tour.title}</h2>
        </div>
        <h3>Created at: {tour.date_created}</h3>
        <h3>{`Status: ${tour.is_open}`}</h3>
        <h3>Pledges:</h3>
        <ul>
          {tour.pledges.map((pledgeData, key) => {
                return (
                    <li key={key}>
                    {pledgeData.amount} from {pledgeData.supporter}
                    </li>
                    );
              })}
          </ul>
      </div>
    );
}
  
  export default TourPage