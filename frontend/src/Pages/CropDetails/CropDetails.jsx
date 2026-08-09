import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


function Profile() {


  const user = {
    name: "Urban Gardener",
    email: "user@example.com",
    city: "Delhi",
    gardenType: "Terrace Garden",
    experience: "2 Years"
  };


  return (

    <>

      <Navbar />


      <section className="section profile-page">


        <div className="container">


          <h1 className="heading">
            My Profile 🌱
          </h1>



          <div className="profile-card">


            <div className="profile-image">
              👤
            </div>



            <div className="profile-details">


              <h2>
                {user.name}
              </h2>


              <p>
                <strong>Email:</strong> {user.email}
              </p>


              <p>
                <strong>City:</strong> {user.city}
              </p>


              <p>
                <strong>Garden Type:</strong> {user.gardenType}
              </p>


              <p>
                <strong>Experience:</strong> {user.experience}
              </p>



            </div>


          </div>


        </div>


      </section>


      <Footer />

    </>

  );

}


export default Profile;