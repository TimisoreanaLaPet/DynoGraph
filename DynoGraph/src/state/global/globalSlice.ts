import {createSlice} from "@reduxjs/toolkit";
import {globalState} from "./globalState.ts";

export const globalSlice = createSlice({
  name: "global",
  initialState: globalState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    }
  }
})

export const {setMode} = globalSlice.actions;