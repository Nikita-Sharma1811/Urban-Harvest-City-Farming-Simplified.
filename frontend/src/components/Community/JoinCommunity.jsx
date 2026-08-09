import { useState } from "react";
import axios from "axios";
import "./JoinCommunity.css";

function JoinCommunity({ onMemberJoined }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    gardenType: "",
    experience: "",
    profileImage: null
  });


  const handleChange = (e) => {

    if (e.target.name === "profileImage") {

      setFormData({
        ...formData,
        profileImage: e.target.files[0]
      });

    } else {

      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });

    }

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = new FormData();

      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("city", formData.city);
      data.append("gardenType", formData.gardenType);
      data.append("experience", formData.experience);


      // Add image
      if (formData.profileImage) {

        data.append(
          "profileImage",
          formData.profileImage
        );

      }


      console.log("FORM DATA:");

      for (let pair of data.entries()) {
        console.log(pair[0], pair[1]);
      }


      const res = await axios.post(
        "http://localhost:5001/api/community",
        data
      );


      console.log(
        "SERVER RESPONSE:",
        res.data
      );


      alert("🌱 Successfully Joined Community");


      // Reset form
      setFormData({
        name: "",
        email: "",
        city: "",
        gardenType: "",
        experience: "",
        profileImage: null
      });


      // Refresh members
      if (onMemberJoined) {
        onMemberJoined();
      }

    }

    catch (error) {

      console.log(
        "JOIN COMMUNITY ERROR:",
        error.response?.data || error
      );


      alert(
        error.response?.data?.message ||
        "Failed to join community"
      );

    }

  };


  return (

    <div className="join-community">

      <h2>
        🤝 Join Community
      </h2>


      <form onSubmit={handleSubmit}>


        {/* Name */}

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />


        {/* Email */}

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />


        {/* City */}

        <input
          type="text"
          name="city"
          placeholder="Enter city"
          value={formData.city}
          onChange={handleChange}
          required
        />


        {/* Garden Type */}

        <select
          name="gardenType"
          value={formData.gardenType}
          onChange={handleChange}
          required
        >

          <option
            value=""
            disabled
          >
            Select Garden Type
          </option>


          <option value="Terrace Garden">
            Terrace Garden
          </option>


          <option value="Kitchen Garden">
            Kitchen Garden
          </option>


          <option value="Rooftop Garden">
            Rooftop Garden
          </option>


          <option value="Balcony Garden">
            Balcony Garden
          </option>

        </select>


        {/* Experience */}

        <input
          type="text"
          name="experience"
          placeholder="Gardening Experience"
          value={formData.experience}
          onChange={handleChange}
          required
        />


        {/* Profile Image */}

        <input
          type="file"
          name="profileImage"
          accept="image/*"
          onChange={handleChange}
        />


        {/* Submit */}

        <button type="submit">
          🌱 Join Now
        </button>


      </form>

    </div>

  );

}


export default JoinCommunity;