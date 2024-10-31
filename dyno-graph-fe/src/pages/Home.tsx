import {Stack} from "@mui/material";
import SideBar from "../components/SideBar.tsx";
import GraphVisualiser from "../components/GraphVisualiser.tsx";

function Home() {
  return (
    <Stack direction="row" height={"calc(100% - 64px)"} width={"100%"}>
      <SideBar/>
      <GraphVisualiser/>
    </Stack>
  );
}

export default Home;