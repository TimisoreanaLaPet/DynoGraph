import {AppBar, Button, Toolbar} from "@mui/material";

function TopBar() {
  return (
    <AppBar position={"static"}>
      <Toolbar>
        <Button variant={"text"}>
          test
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;