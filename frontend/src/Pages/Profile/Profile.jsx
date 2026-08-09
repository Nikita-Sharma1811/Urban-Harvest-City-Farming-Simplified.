import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


function Signup() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });



  const handleChange = (e)=>{

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };



  const handleSubmit = (e)=>{

    e.preventDefault();

    console.log(formData);

  };



  return (

    <>

      <Navbar />


      <section className="section auth-page">


        <div className="container auth-container">


          <h1 className="heading">
            Create Account 🌱
          </h1>


          <p className="sub-heading">
            Join Urban Harvest and start your gardening journey.
          </p>




          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >


            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />



            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />



            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              required
            />



            <button
              type="submit"
              className="primary-btn"
            >
              Sign Up
            </button>


          </form>




          <p className="auth-text">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>



        </div>


      </section>


      <Footer />

    </>

  );

}


export default Signup;