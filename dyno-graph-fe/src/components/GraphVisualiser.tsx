import {Stack} from "@mui/material";
import {useGetGraphQuery} from "../state/api.ts";

function GraphVisualiser() {
  const {data, isLoading} = useGetGraphQuery(undefined)

  return (
    <Stack height={"100%"} width={"100%"}>
      yeepeeeeeeeeeeeeeeeeeeey
      {data?.graph}
    </Stack>
  );
}

export default GraphVisualiser;