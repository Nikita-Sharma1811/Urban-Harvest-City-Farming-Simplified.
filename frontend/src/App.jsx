import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Tutorials from "./pages/Tutorials/Tutorials";
import GrowSmart from "./pages/GrowSmart/GrowSmart";
import Community from "./pages/Community/Community";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import CropDetails from "./pages/CropDetails/CropDetails";
import NotFound from "./pages/NotFound/NotFound";


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