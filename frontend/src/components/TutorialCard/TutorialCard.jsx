import "./TutorialCard.css";

function TutorialCard({
  thumbnail,
  title,
  duration,
  level,
  video,
}) {

return (
  <div className="tutorial-card">


    <div className="tutorial-video">

      <iframe
        src={video}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

    </div>


    <div className="tutorial-content">

      <h3>{title}</h3>


      <p>
        <strong>Duration :</strong> {duration}
      </p>


      <p>
        <strong>Level :</strong> {level}
      </p>


    </div>


  </div>
);

}

export default TutorialCard;