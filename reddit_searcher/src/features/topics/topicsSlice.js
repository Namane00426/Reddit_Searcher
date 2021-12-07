import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
  },
  reducers: {
    searchTerm: (state, action) => {
      const {term} = action.payload;
      state.filter(state => state.contents == term)
      }
    },
   
})

export const {searchTerm} = topicsSlice.actions;
export const selectTopics = state => state.topics;
export default topicsSlice.reducer;
