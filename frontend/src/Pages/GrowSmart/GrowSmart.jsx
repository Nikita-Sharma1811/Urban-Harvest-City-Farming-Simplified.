import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./GrowSmart.css";

function GrowSmart() {

  const [formData, setFormData] = useState({
    temperature: "",
    city: "",
    state: "",
    gardenType: "",
    area: ""
  });

  const [crops, setCrops] = useState([]);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    const temp = Number(formData.temperature);

    let suggestedCrops = [];


    if (formData.gardenType === "Balcony") {

      suggestedCrops =
        temp >= 25
          ? [
              "🍅 Cherry Tomato",
              "🌿 Mint",
              "🌱 Basil",
              "🌶️ Green Chilli",
              "🥬 Spinach"
            ]
          : [
              "🥬 Lettuce",
              "🌿 Coriander",
              "🥕 Carrot",
              "🌱 Peas"
            ];

    }


    else if (formData.gardenType === "Terrace") {

      suggestedCrops =
        temp >= 25
          ? [
              "🍅 Tomato",
              "🌶️ Chilli",
              "🥒 Cucumber",
              "🌱 Okra",
              "🍆 Brinjal"
            ]
          : [
              "🥦 Broccoli",
              "🥬 Spinach",
              "🥕 Carrot",
              "🌱 Peas"
            ];

    }


    else if (formData.gardenType === "Rooftop") {

      suggestedCrops = [
        "🍅 Tomato",
        "🍆 Brinjal",
        "🥒 Bottle Gourd",
        "🌱 Beans",
        "🌶️ Chilli"
      ];

    }


    else if (formData.gardenType === "Kitchen") {

      suggestedCrops = [
        "🌿 Coriander",
        "🌿 Mint",
        "🌱 Curry Leaves",
        "🥬 Spinach",
        "🌶️ Green Chilli"
      ];

    }


    else {

      suggestedCrops = [
        "🍅 Tomato",
        "🌿 Mint",
        "🌱 Coriander"
      ];

    }


    // Show suggestions
    setCrops(suggestedCrops);


    // Save data in MongoDB
    try {

      const response = await fetch(
        "http://localhost:5001/api/growsmart",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            temperature: temp,
            city: formData.city,
            state: formData.state,
            gardenType: formData.gardenType,
            area: formData.area,
            suggestedCrops: suggestedCrops
          })
        }
      );


      const data = await response.json();

      console.log("GrowSmart Backend Response:", data);


      if (!response.ok) {

        console.log(
          "Failed to save GrowSmart data:",
          data.message
        );

      }

    }

    catch (error) {

      console.log("GrowSmart Backend Error:", error);

    }

  };


  const resetForm = () => {

    setFormData({
      temperature: "",
      city: "",
      state: "",
      gardenType: "",
      area: ""
    });

    setCrops([]);

  };


  return (

    <>

      <Navbar />

      <section className="section community-page">

        <div className="container">

          <h1 className="heading">
            GrowSmart 🌱
          </h1>

          <p className="sub-heading">
            Enter your garden details and get smart crop suggestions.
          </p>


          {/* GrowSmart Form */}

          <form
            onSubmit={handleSubmit}
            className="growsmart-form"
          >

            <input
              type="number"
              name="temperature"
              placeholder="Temperature (°C)"
              value={formData.temperature}
              onChange={handleChange}
              required
            />


            <input
              type="text"
              name="city"
              placeholder="Enter City"
              value={formData.city}
              onChange={handleChange}
              required
            />


            <input
              type="text"
              name="state"
              placeholder="Enter State"
              value={formData.state}
              onChange={handleChange}
              required
            />


            <select
              name="gardenType"
              value={formData.gardenType}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Garden Type
              </option>

              <option value="Balcony">
                Balcony Garden
              </option>

              <option value="Terrace">
                Terrace Garden
              </option>

              <option value="Rooftop">
                Rooftop Garden
              </option>

              <option value="Kitchen">
                Kitchen Garden
              </option>

            </select>


            <input
              type="text"
              name="area"
              placeholder="Garden Area (sq ft)"
              value={formData.area}
              onChange={handleChange}
              required
            />


            <div className="growsmart-buttons">

              <button
                type="submit"
                className="primary-btn"
              >
                Suggest Crops 🌱
              </button>

              <button
                type="button"
                className="secondary-btn"
                onClick={resetForm}
              >
                Reset
              </button>

            </div>

          </form>


          {/* Recommended Crops */}

          {crops.length > 0 && (

            <div className="recommended-crops">

              <h2>
                Recommended Crops 🌿
              </h2>

              <div className="crops-grid">

                {crops.map((crop, index) => (

                  <div
                    key={index}
                    className="crop-card"
                  >
                    {crop}
                  </div>

                ))}

              </div>

            </div>

          )}

        </div>

      </section>

      <Footer />

    </>

  );

}

export default GrowSmart;