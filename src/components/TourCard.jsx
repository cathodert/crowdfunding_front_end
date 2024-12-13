import { Link } from "react-router-dom";
import "./TourCard.css";
import ImagePlaceholder from "../img/image-placeholder.png";
import ImageWithFallback from "./ImageError";

function TourCard(props) {
  const { tourData } = props;
  const tourLink = window.location.pathname !== "tours" ? `/tours/${tourData.id}` : `/${tourData.id}`;

  return (
    <div className="tour-card">
      <Link to={tourLink}>
        <ImageWithFallback
          src={tourData.image}
          alt="Tour cover image"
          placeholder={ImagePlaceholder}
        />
        <h3 className="text">{tourData.title}</h3>
        <h3 className="text">{tourData.band}</h3>
      </Link>
    </div>
  );
}

export default TourCard;