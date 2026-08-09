import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Login() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const response = await fetch(
        "http://localhost:5001/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );


      const data = await response.json();



      if(response.ok){


        alert("Login Successful! 🌱");


        // Save user details
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );


        navigate("/community");


      }
      else{

        alert(
          data.message || "Invalid Email or Password"
        );

      }


    }
    catch(error){

      console.log(error);

      alert("Server Error");

    }


  };



  return (
    <>


      <Navbar />


      <section className="section auth-page">

        <div className="container auth-container">


          <h1 className="heading">
            Login 🌱
          </h1>


          <p className="sub-heading">
            Welcome back to Urban Harvest.
          </p>



          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >


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

              placeholder="Enter Password"

              value={formData.password}

              onChange={handleChange}

              required

            />



            <button

              type="submit"

              className="primary-btn"

            >

              Login

            </button>



          </form>




          <p className="auth-text">

            Don't have an account?{" "}

            <Link to="/signup">

              Sign Up

            </Link>

          </p>



        </div>

      </section>



      <Footer />


    </>
  );

}


export default Login;