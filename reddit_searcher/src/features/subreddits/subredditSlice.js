import { createSlice } from "@reduxjs/toolkit";

const subredditSlice = createSlice({
  name: 'subreddits',
  initialState: {},
  reducers: {
    addSubreddit: (state, action) => {
      const {id, name} = action.payload;
      state.push[id] = {
        id: id,
        name: name
      }
      }
    },
    // removeSubreddit(state, action) {
    //   const {removeId} = action.payload;
    //   state.filter((state, id) => state.id !== removeId);
    // }
})

export const {addSubreddit} = subredditSlice.actions;
export const selectSubreddits = state => state.subreddits;
export default subredditSlice.reducer;
