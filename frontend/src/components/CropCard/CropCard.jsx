import { Link } from "react-router-dom";
import "./CropCard.css";

function CropCard({
  id,
  image,
  name,
  season,
  difficulty,
}) {
  return (
    <div className="crop-card">

      <div className="crop-image">
        <img src={image} alt={name} />
      </div>

      <div className="crop-content">

        <h3>{name}</h3>

        <p>
          <strong>Season :</strong> {season}
        </p>

        <p>
          <strong>Difficulty :</strong> {difficulty}
        </p>

        <Link
          to={`/crop/${id}`}
          className="crop-btn"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default CropCard;