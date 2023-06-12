import { createSlice } from "@reduxjs/toolkit"
import imageJuliusomo from '../../assets/imgs/imageJuliusomo.webp'

const initialState = {
  image: imageJuliusomo,
  username: "juliusomo"
}

const userSlice = createSlice({
  name: "user",
  initialState
})

export default userSlice.reducer