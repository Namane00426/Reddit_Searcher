import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from "react-router-dom";

import SearchSubreddit from '../components/SearchSubreddit';
import Subreddits from '../features/subreddits/Subreddits';
import Subreddit from '../features/subreddits/Subreddit';
import Topics from '../features/topics/topics'
import ROUTES from './routes';



export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.subreddits.Route()} activeClassName="active">
              Viewer            
             </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.newSubreddits.Route()} activeClassName="active">
              Editor
            </NavLink>
          </li>
        </ul>
      </nav>

    </Router>
  );
}