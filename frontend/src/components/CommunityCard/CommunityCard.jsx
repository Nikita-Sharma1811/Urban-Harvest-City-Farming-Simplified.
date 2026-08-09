import { useState } from "react";
import "./CommunityCard.css";

function CommunityCard({
  name,
  city,
  gardenType,
  experience,
  image,
  rating = 5,
  comments = [],
}) {


const [likes, setLikes] = useState(0);

const [commentList, setCommentList] = useState(comments);

const [comment, setComment] = useState("");



const handleLike = () => {

  setLikes(likes + 1);

};



const addComment = () => {

  if(comment.trim() !== ""){

    setCommentList([
      ...commentList,
      comment
    ]);

    setComment("");

  }

};



return (

<div className="community-card">


<img

src={

image

?

image

:

"/default-user.png"

}

alt={name}

className="community-image"

/>



<div className="community-content">



<h3>

{name || "Community Member"}

</h3>



<p>

<strong>📍 City:</strong> {city || "Not mentioned"}

</p>



<p>

<strong>🌱 Garden:</strong> {gardenType || "Not mentioned"}

</p>



<p>

<strong>🌿 Experience:</strong> {experience || "Beginner"}

</p>



<p>

<strong>Rating:</strong>{" "}

{"⭐".repeat(rating)}

</p>




<div className="community-actions">


<button onClick={handleLike}>

❤️ {likes}

</button>



<button>

🤝 Connect

</button>



<button>

📤 Share

</button>



</div>




<div className="comment-box">


<input

type="text"

placeholder="Write your comment..."

value={comment}

onChange={(e)=>setComment(e.target.value)}

/>



<button onClick={addComment}>

Post

</button>


</div>





<div className="comments">


{

commentList.map((item,index)=>(


<p key={index}>

💬 {item}

</p>


))

}


</div>



</div>


</div>

);


}


export default CommunityCard;