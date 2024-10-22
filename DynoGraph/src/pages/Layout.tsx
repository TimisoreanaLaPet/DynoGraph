import TopBar from "../components/TopBar.tsx";
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <div style={{width:'100%', height:'100%'}}>
      <TopBar/>
      <Outlet/>
    </div>
  );
}

export default Layout;