import { Link } from "react-router-dom";
// import embedImage from "./EmbedImage";
// import "./BandCard.css";

function PledgeCard(props) {
  const { pledgeData } = props;
  const pledgeLink = window.location.pathname !== "tours" ? `/tours/${tourData.id}/${id}` : `/${tourData.id}/${id}`

  return (
    <div className="pledge-card">
      <Link to={pledgeLink}>
        <h3>Amount: ${pledgeData.amount}</h3>
        <h3>Comment: {pledgeData.comment}</h3>
      </Link>
    </div>
  );
}

export default PledgeCard;