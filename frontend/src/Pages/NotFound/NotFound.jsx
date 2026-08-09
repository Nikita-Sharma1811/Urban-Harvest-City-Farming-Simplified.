import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


function NotFound() {


  return (

    <>

      <Navbar />


      <section className="section not-found-page">


        <div className="container not-found-container">


          <h1>
            404
          </h1>


          <h2>
            Page Not Found 🌱
          </h2>


          <p>
            Sorry, the page you are looking for does not exist.
          </p>



          <Link
            to="/"
            className="primary-btn"
          >
            Go Home
          </Link>



        </div>


      </section>


      <Footer />


    </>

  );

}


export default NotFound;