import {ThemeMode} from "../../theme/theme.ts";

export interface GlobalState {
  mode: ThemeMode
}

export const globalState: GlobalState = {
  mode: "light"
}