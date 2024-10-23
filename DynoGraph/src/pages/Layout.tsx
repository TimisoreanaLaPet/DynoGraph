import TopBar from "../components/TopBar.tsx";
import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";

function Layout() {
  return (
    <Box width='100%' height='100%'>
      <TopBar/>
      <Outlet/>
    </Box>
  );
}

export default Layout;