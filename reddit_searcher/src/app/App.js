import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import SearchCategory from '../components/SearchCategory';
import Categories from '../features/categories/Categories';
import Category from '../features/categories/Category';
import Subreddits from '../features/subreddits/Subreddits';
import Subreddit from '../features/subreddits/Subreddit';
import ROUTES from './routes';

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.categories.Route()} activeClassName="active">
              View Subreddits
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.newCategories.Route()} activeClassName="active">
              Edit favorite categories
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/categories">
          <categoriesRoutes /> 
        </Route>
        <Route path="/categories">
          <newCategoriesRoutes /> 
        </Route>
      </Switch>
    </Router>
  );
}