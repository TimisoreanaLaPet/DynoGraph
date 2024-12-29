import {Stack} from "@mui/material";
import GraphVisualiser from "../components/GraphVisualiser.tsx";

function Home() {
  return (
    <Stack direction="row" height={"calc(100% - 64px)"} width={"100%"}>
      <GraphVisualiser/>
    </Stack>
  );
}

export default Home;