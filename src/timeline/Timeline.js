import React, { useEffect, useState } from "react";
// import { Suspense, lazy } from "react";
import Post from "./Post/Post";
import "./Timeline.css";
import Ad from "./Ad/Ad";
import {getDocs,collection} from "firebase/firestore";
import { db } from "../firebase";
import {generateRandomPost} from "../helper/generatePosts"
import { combineReducers } from "redux";

function Timeline() {
  const [posts, setPosts] = useState([]); 
  const [response, setResponse] = useState([{}]); 
  const productCollectionRef =collection(db,"products")

  const fetchRandomPosts = () => {
    return Array.from({ length: 50 }, () => generateRandomPost());
  };

  const mixAndRandomizePostsAndAds = (posts, ads) => {
    const mixedList = [...posts, ...ads];
  
    // Randomize the mixed list
    for (let i = mixedList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mixedList[i], mixedList[j]] = [mixedList[j], mixedList[i]];
    }
  
    return mixedList;
  };

  useEffect(() => {
    const getAdList = async ()=>{
      try {
        const data = await getDocs(productCollectionRef)
        const filteredData = data.docs.map((doc)=>({...doc.data(), id: doc.id}));
        const randomPosts = fetchRandomPosts();
        const combinedPosts = mixAndRandomizePostsAndAds(filteredData,randomPosts);

        // Update the state with the combined data
        setPosts(combinedPosts);
      } catch (error) {
        console.error(error);
      }
    };  
    getAdList();
  }, []);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post, id) => post.type&&post.type==='post'?(
            <Post
              key = {id}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ):<Ad 
          title =  {post.title}
          description = {post.description}
          price =  {post.price}
          image_url = {post.image_url}
          ad_url= {post.link}
          personalizedText={"hello wasi see this"}
            />)}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
