import {AppBar, Box, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import {DarkMode, LightMode} from "@mui/icons-material";
import {useAppDispatch, useAppSelector} from "../state/store.ts";
import {setMode} from "../state/global/globalSlice.ts";

function TopBar() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(state => state.global.mode)

  function switchTheme() {
    if (mode === 'light')
      dispatch(setMode("dark"));
    else
      dispatch(setMode("light"));
  }

  return (
    <AppBar position={"static"}>
      <Toolbar>
        <Stack width={"100%"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <Typography>ty beyonce</Typography>
          <Box>
            <IconButton color={'inherit'} onClick={switchTheme}>
              {mode === 'light' ? <LightMode/> : <DarkMode/>}
            </IconButton>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;