import {Button, Stack} from "@mui/material";
import {useImportCsvMutation} from "../state/api.ts";

function SideBar() {
  const [importCsv, {isLoading}] = useImportCsvMutation()

  async function handleClick() {
    await importCsv({csv: "yeepy"}).unwrap()
  }

  return (
    <Stack spacing={2} height={"100%"} width={300} bgcolor={"#ac82bd"}>
      <Button variant={"contained"} onClick={handleClick} disabled={isLoading}>
        Import CSV
      </Button>
    </Stack>
  );
}

export default SideBar;