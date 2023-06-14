import { createSlice } from "@reduxjs/toolkit"
import users from "../../constants/users"
import imageJuliusomo from '../../assets/imgs/imageJuliusomo.webp'

const initialState = {
  user: {
    image: imageJuliusomo,
    username: "juliusomo"
  },
  users: users
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser(state, action) {
      state.user = action.payload;
    }
  }
})

export default userSlice.reducer
export const { changeUser } = userSlice.actions