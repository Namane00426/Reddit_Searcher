import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from '../features/subreddits/subredditSlice';

export default configureStore({
  reducer: {
   subreddits: subredditsReducer,
  },
});
