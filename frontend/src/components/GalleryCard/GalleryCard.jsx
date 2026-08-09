import "./GalleryCard.css";


function GalleryCard({ image, title, description }) {


  return (

    <div className="gallery-card">


      <img
        src={image}
        alt={title}
        className="gallery-image"
      />


      <div className="gallery-content">


        <h3>
          {title}
        </h3>


        <p>
          {description}
        </p>


      </div>


    </div>

  );

}


export default GalleryCard;