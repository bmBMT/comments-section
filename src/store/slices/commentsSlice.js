import { createSlice } from "@reduxjs/toolkit"
import comments from '../../constants/comments'

const initialState = {
  comments: comments,
  count: 4
}

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment(state, action) {
      const comment = JSON.parse(action.payload);
      state.comments.push(comment);
      state.count = state.count + 1;
    },

    addReplyComment(state, action) {
      const comment = JSON.parse(action.payload);
      const ownComment = state.comments.filter(comm => comm.id === comment.ownCommentId)[0];
      ownComment.replies.push(comment);
      state.count = state.count + 1;
    },

    deleteComment(state, action) {
      const comment = action.payload;
      if (comment.id === comment.ownCommentId) {
        state.comments = state.comments.filter(comm => comm.id !== comment.id);
        return;
      }

      const ownComment = state.comments.filter(comm => comm.id === comment.ownCommentId)[0];
      ownComment.replies = ownComment.replies.filter(comm => comm.id !== comment.id)
    },

    changeCommentContent(state, action) {
      const comment = action.payload.comment;
      const content = action.payload.content;
      if (comment.id === comment.ownCommentId) {
        state.comments = state.comments.map(comm => comm.id === comment.id ? { ...comm, content: content } : comm);
        return;
      }

      const ownComment = state.comments.filter(comm => comm.id === comment.ownCommentId)[0];
      ownComment.replies = ownComment.replies.map(comm => comm.id === comment.id ? { ...comm, content: content } : comm)
    }
  }
})

export default commentsSlice.reducer
export const { addComment, addReplyComment, deleteComment, changeCommentContent } = commentsSlice.actions