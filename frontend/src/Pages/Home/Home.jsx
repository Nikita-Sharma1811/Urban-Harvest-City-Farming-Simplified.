import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";

import FeatureCard from "../../components/FeatureCard/FeatureCard";
import CropCard from "../../components/CropCard/CropCard";
import TutorialCard from "../../components/TutorialCard/TutorialCard";


import crops from "../../data/crops";
import tutorials from "../../data/tutorials";
import community from "../../data/community";

import feature1 from "../../assets/images/img17.jpg";

import feature2 from "../../assets/images/img19.jpg";
import feature4 from "../../assets/images/img8.jpg";
import feature5 from "../../assets/images/img5.jpg";
import feature3 from "../../assets/images/img12.jpg";
import feature6 from "../../assets/images/img20.jpg";




function Home() {

  const features = [
    {
      image: feature1,
      title: "Smart Gardening",
      description:
        "Get crop suggestions according to your space, temperature and location."
    },
    {
      image: feature2,
      title: "Grow Anywhere",
      description:
        "Create beautiful gardens in balconies, rooftops and small spaces."
    },
    {
      image: feature3,
      title: "Eco Friendly",
      description:
        "Follow sustainable gardening methods and grow organic food."
    }
    ,
    {
      image: feature4,
      title: "healthy Lifestyle",
      description:
        "Grow your own vegetables and fruits for a healthy lifestyle."

    },
    {
      image: feature5,
      title: "Seasonal Guidance",
      description:
        "Get tips on when to plant and harvest different crops based on the season."
    },
    {
      image: feature6,
      title:"organic compost tips at home",
      description:
        "Learn how to make organic compost at home using kitchen waste and garden debris."
    }
    
  ];


  return (
    <>

      <Navbar />

      <Hero />


      <section className="section home-feature">

        <div className="container">

          <h2 className="heading">
            Why Choose Urban Harvest?
          </h2>

          <p className="sub-heading">
            Smart solutions for modern urban farming.
          </p>


          <div className="grid-3">

            {features.map((item,index)=>(
              <FeatureCard
                key={index}
                {...item}
              />
            ))}

          </div>

        </div>

      </section>



      <section className="section home-crops">

        <div className="container">

          <h2 className="heading">
            Popular Crops
          </h2>


          <div className="grid-3">

            {crops.slice(0,3).map((crop)=>(
              <CropCard
                key={crop.id}
                {...crop}
              />
            ))}

          </div>

        </div>

      </section>



    
          

      

   



      

      <Footer />

    </>
  );
}


export default Home;