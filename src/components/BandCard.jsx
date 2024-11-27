import { Link } from "react-router-dom";
import "./BandCard.css";

function BandCard(props) {
  const { bandData } = props;
  const bandLink = window.location.pathname !== "bands" ? `/bands/${bandData.id}` : `/${bandData.id}`

  return (
    <div className="band-card">
      <Link to={bandLink}>
        <img src={bandData.image} />
        <h3>{bandData.name}</h3>
      </Link>
    </div>
  );
}

export default BandCard;