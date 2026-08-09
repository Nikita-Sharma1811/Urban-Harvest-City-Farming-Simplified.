import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./JoinCommunity.css";

function JoinCommunity({ onMemberJoined }) {

  const navigate = useNavigate();

  const [joined, setJoined] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

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

    // 🔒 LOGIN CHECK
    const user = localStorage.getItem("user");

    if (!user) {

      alert(
        "🔒 Login required to join the community. Please login or sign up."
      );

      navigate("/login");

      return;
    }

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

      // 🌱 Successfully joined
      setJoined(true);
      setShowForm(false);

      setMessage(
        "🌱 You have successfully joined the community!"
      );

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

      const backendMessage =
        error.response?.data?.message || "";

      const fullError =
        JSON.stringify(error.response?.data || error);

      // 👤 Already a member
      if (
        error.response?.status === 400 ||
        backendMessage.toLowerCase().includes("already") ||
        fullError.toLowerCase().includes("e11000") ||
        fullError.toLowerCase().includes("duplicate key") ||
        fullError.toLowerCase().includes("email_1")
      ) {

        setJoined(true);
        setShowForm(false);

        setMessage(
          "ℹ️ You are already a member of the community."
        );

        return;
      }

      // ❌ Other error
      setMessage(
        backendMessage ||
        "❌ Failed to join community. Please try again."
      );

    }
  };

  return (

    <div className="join-community">

      <h2>
        🤝 Join Community
      </h2>

      {/* FIRST JOIN COMMUNITY BUTTON */}

      {!joined && !showForm && (

        <button
          type="button"
          className="join-community-button"
          onClick={() => {
            setShowForm(true);
            setMessage("");
          }}
        >
          🤝 Join Community
        </button>

      )}

      {/* MESSAGE */}

      {message && (

        <div className="community-message">

          {message}

        </div>

      )}

      {/* FORM */}

      {!joined && showForm && (

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

      )}

      {/* JOINED COMMUNITY */}

      {joined && (

        <>
          <button
            type="button"
            className="joined-button"
            disabled
          >
            ✅ Joined Community
          </button>

          {/* JOIN COMMUNITY BUTTON */}

          <button
            type="button"
            className="join-community-button"
            onClick={() => {
              setJoined(false);
              setShowForm(true);
              setMessage("");
            }}
          >
            🤝 Join Community
          </button>
        </>

      )}

    </div>

  );
}

export default JoinCommunity;