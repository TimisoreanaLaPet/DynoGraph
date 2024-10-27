import {configureStore} from "@reduxjs/toolkit";
import {globalSlice} from "./global/globalSlice.ts";
import {useDispatch, useSelector} from "react-redux";

const reducers = {
  global: globalSlice.reducer
}

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()