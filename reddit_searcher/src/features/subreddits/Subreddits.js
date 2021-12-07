import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { selectSubreddits } from './subredditSlice';
import { useSelector } from "react-redux";

export default function Subreddits() {
  
  const subReddits = useSelector(selectSubreddits);
  if(!subReddits) {
    alert('No data! Please add subreddits to a list.');
    return;
  }

  return(
    <section className="sideBar">
      <h3>Subreddit list</h3>
      <ul className="sideBar SbrList">
        {Object.Values(subReddits).map((subReddit) =>(
          <li className="subreddit left" key={subReddit.id}>

          </li>
        )) }
      </ul>
        
    </section>

  );

}