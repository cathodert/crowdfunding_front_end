import { Link } from "react-router-dom";
import "./BandCard.css";
import ImagePlaceholder from "../img/image-placeholder.png";
import ImageWithFallback from "./ImageError";

function BandCard(props) {
  const { bandData } = props;
  const bandLink = window.location.pathname !== "bands" ? `/bands/${bandData.id}` : `/${bandData.id}`

  return (
    <div className="band-card">
      <Link to={bandLink}>
      <ImageWithFallback
          src={bandData.cover_image}
          alt="Band cover image"
          placeholder={ImagePlaceholder}
        />
        <h3>{bandData.name}</h3>
      </Link>
    </div>
  );
}

export default BandCard;