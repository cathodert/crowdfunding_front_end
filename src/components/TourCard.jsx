import { Link } from "react-router-dom";
import "./TourCard.css";

function TourCard(props) {
  const { tourData } = props;
  const tourLink = window.location.pathname !== "tours" ? `/tours/${tourData.id}` : `/${tourData.id}`


  return (
    <div className="tour-card">
     <Link to={tourLink}>
        <img src={tourData.image} />
        <h3>{tourData.title}</h3>
      </Link>
    </div>
  );
}

export default TourCard;