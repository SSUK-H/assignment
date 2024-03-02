import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    createPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      const { id } = action.payload;
      console.log(id);

      // 해당 게시물 아이디 값과 같은 게시물 인텍스 찾기
      const index = state.findIndex((post) => post.id === id);
      // 찾았다면 해당 게시물 삭제
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    updatePost: (state, action) => {
      const { id, editTitle, editContent } = action.payload;

      // id값이 같을 때 가져온 값 state에 넣어줌
      const post = state.find((post) => post.id === id);
      if (post) {
        post.title = editTitle;
        post.content = editContent;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { createPost, deletePost, updatePost } = postSlice.actions;

export default postSlice.reducer;
