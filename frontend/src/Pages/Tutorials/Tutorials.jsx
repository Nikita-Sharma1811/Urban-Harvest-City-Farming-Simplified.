import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import TutorialCard from "../../components/TutorialCard/TutorialCard";

import tutorials from "../../data/tutorials";

function Tutorials() {

  return (
    <>
      <Navbar />

      <section className="section tutorial-page">

        <div className="container">

          <h1 className="heading">
            Gardening Video Tutorials
          </h1>

          <p className="sub-heading">
            Learn Balcony Gardening, Terrace Gardening, Kitchen Gardening,
            Rooftop Gardening and Organic Compost Making with easy
            step-by-step video tutorials.
          </p>

          <div className="grid-3">

            {
              tutorials.map((tutorial) => (
                <TutorialCard
                  key={tutorial.id}
                  {...tutorial}
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

export default Tutorials;