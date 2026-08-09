import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import GalleryCard from "../../components/GalleryCard/GalleryCard";

import crops from "../../data/crops";

function Gallery() {

  return (
    <>

      <Navbar />


      <section className="section gallery-page">

        <div className="container">

          <h1 className="heading">
            Urban Garden Gallery
          </h1>


          <p className="sub-heading">
            Explore beautiful vegetables, fruits, flowers and
            urban farming ideas.
          </p>



          <div className="grid-3">

            {
              crops.map((item)=>(
                <GalleryCard
                  key={item.id}
                  {...item}
                />
              ))
            }


          </div>


        </div>


      </section>


      <Footer />


    </>
  );
}

export default Gallery;