import { createSlice } from "@reduxjs/toolkit";

const subredditslice = createSlice({
  name: 'subreddits',
  initialState: [
    [id]: {
      id: '',
      name: '',
    }
  ],
  reducers: {
    addSubreddit(state, action) {
      const {id, name} = action.payload;
      state.push({id, name});
    },
    removeSubreddit(state, action) {
      const {removeId} = action.payload;
      state.filter((state, id) => state.id !== removeId);
    }
  }
})

export const {addSubreddit} = subredditslice.actions;
export default subredditslice.reducer;
