import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./Pages/Home/Home";
import Gallery from "./Pages/Gallery/Gallery";
import Tutorials from "./Pages/Tutorials/Tutorials";
import GrowSmart from "./Pages/GrowSmart/GrowSmart";
import Community from "./Pages/Community/Community";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Profile from "./Pages/Profile/Profile";
import CropDetails from "./Pages/CropDetails/CropDetails";
import NotFound from "./Pages/NotFound/NotFound";


function App() {

  return (

    <Routes>

      <Route 
        path="/" 
        element={<Home />} 
      />


      <Route 
        path="/gallery" 
        element={<Gallery />} 
      />


      <Route 
        path="/tutorials" 
        element={<Tutorials />} 
      />


      <Route 
        path="/growsmart" 
        element={<GrowSmart />} 
      />


      <Route 
        path="/community" 
        element={<Community />} 
      />


      <Route 
        path="/login" 
        element={<Login />} 
      />


      <Route 
        path="/signup" 
        element={<Signup />} 
      />


      <Route 
        path="/profile" 
        element={<Profile />} 
      />


      <Route 
        path="/crop/:id" 
        element={<CropDetails />} 
      />


      <Route 
        path="*" 
        element={<NotFound />} 
      />


    </Routes>

  );

}


export default App;