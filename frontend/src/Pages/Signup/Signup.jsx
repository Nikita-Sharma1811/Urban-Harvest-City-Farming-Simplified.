import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


function Signup() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: "",
    confirmPassword: "",

  });



  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();



    if (formData.password !== formData.confirmPassword) {

      alert("Passwords do not match!");

      return;

    }



    try {


      const response = await fetch(

        "http://localhost:5001/api/auth/signup",

        {

          method: "POST",

          headers: {

            "Content-Type": "application/json"

          },


          body: JSON.stringify({

            name: formData.name,

            email: formData.email,

            password: formData.password

          })

        }

      );



      const data = await response.json();



      if(response.ok){


        alert("Signup Successful! 🌱");


        console.log(data);


        navigate("/login");


      }

      else{

        alert(
          data.message || "Signup Failed"
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

              placeholder="Full Name"

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



            <input

              type="password"

              name="confirmPassword"

              placeholder="Confirm Password"

              value={formData.confirmPassword}

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

            Already have an account?{" "}

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