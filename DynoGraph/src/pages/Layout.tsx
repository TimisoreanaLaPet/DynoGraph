import TopBar from "../components/TopBar.tsx";
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <div>
      <TopBar/>
      <Outlet/>
    </div>
  );
}

export default Layout;