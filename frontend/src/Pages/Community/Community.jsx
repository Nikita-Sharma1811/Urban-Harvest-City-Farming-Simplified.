import { useEffect, useState } from "react";
import axios from "axios";
import "./Community.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import CreatePost from "../../components/Community/CreatePost";
import PostCard from "../../components/Community/PostCard";
import CommunityCard from "../../components/CommunityCard/CommunityCard";
import JoinCommunity from "../../components/Community/JoinCommunity";


function Community() {


const [posts, setPosts] = useState([]);

const [members, setMembers] = useState([]);




// Fetch Posts

const fetchPosts = async () => {

  try {

    const res = await axios.get(
      "http://localhost:5001/api/posts"
    );

    setPosts(res.data);

  }

  catch(err){

    console.log(err);

  }

};





// Fetch Community Members

const fetchMembers = async () => {

  try {

    const res = await axios.get(
      "http://localhost:5001/api/community"
    );


    console.log("Members:", res.data);


    setMembers(res.data);


  }

  catch(err){

    console.log(err);

  }

};





useEffect(()=>{

  fetchPosts();

  fetchMembers();

},[]);





return (

<>


<Navbar />



<section className="section community-page">


<div className="container">



<h1 className="heading">

🌱 Urban Harvest Community

</h1>



<p className="sub-heading">

Share your gardening journey, upload photos,
ask questions and help fellow gardeners grow together.

</p>





{/* Join Community */}

<JoinCommunity

onMemberJoined={fetchMembers}

/>





<br />





<h2 className="heading">

👥 Community Members

</h2>





{

members.length === 0 ?


(

<p

style={{

textAlign:"center"

}}

>

No members joined yet 🌱

</p>


)


:


(


<div className="members-grid">


{

members.map((member)=>(


<CommunityCard


key={member._id}



name={member.name}



city={member.city}



gardenType={member.gardenType}



experience={member.experience}




image={

member.image

?

`http://localhost:5001${member.image}`

:

""

}



rating={member.rating || 5}



comments={member.comments || []}



/>


))


}



</div>


)


}






<br />





<CreatePost

onPostCreated={fetchPosts}

/>






<br />





<h2 className="heading">

🌿 Recent Posts

</h2>






{

posts.length === 0 ?


(

<p

style={{

textAlign:"center",

marginTop:"40px"

}}

>

No posts yet.
Be the first gardener to share your journey 🌱

</p>


)


:


(


posts.map((post)=>(


<PostCard

key={post._id}

post={post}

refreshPosts={fetchPosts}


/>


))


)


}




</div>


</section>




<Footer />


</>

);

}


export default Community;