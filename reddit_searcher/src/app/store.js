import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from '../features/subreddits/subredditSlice';
import topicsReducer from '../features/topics/topicsSlice';

export default configureStore({
  reducer: {
   subreddits: subredditsReducer,
   topics: topicsReducer,
  },
});
