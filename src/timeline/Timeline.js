import React, { useEffect, useState } from "react";
import Post from "./Post/Post";
import "./Timeline.css";
import Ad from "./Ad/Ad";
import {generateRandomPost} from "../helper/generatePosts"
import { useSelector } from "react-redux";
import axios from "axios";


function Timeline() {
  const [posts, setPosts] = useState([]); 
  const user = useSelector((state) => state.data.user.user);

  const fetchRandomPosts = () => {
    return Array.from({ length: 10 }, () => generateRandomPost());
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
        const response = await axios.get(`http://localhost:5000/get_ads/${user.email}`);
        const filteredData = response.data;
        const randomPosts = fetchRandomPosts();
        const combinedPosts = mixAndRandomizePostsAndAds(filteredData,randomPosts);

        // Update the state with the combined data
        setPosts(combinedPosts);
      } catch (error) {
        console.error('Error fetching ads:', error);
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
          personalizedText={post.personalizedText}
            />)}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
