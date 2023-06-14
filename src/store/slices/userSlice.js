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
  initialState
})

export default userSlice.reducer