
import { useState } from "react";
 
import MenuIcon        from "@mui/icons-material/Menu";
 
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import "./MasterPageLayout.css";
import  Headermenu from "./Headermenu";

import  Headermenudata from "./Headermenudata";

const MasterPageLayout = ({ children }) => {
  //const [isOpened, setIsOpened] = useState(false);
  const [openedSideBar, setOpenedSideBar] = useState(true);

  return (
    <div className="App">

      <div className="header">

        <div className="icon" onClick={() => setOpenedSideBar(!openedSideBar)}>
           {openedSideBar ? <ChevronLeftIcon /> : <MenuIcon />}
           
        </div>

        <div className="header-title"> < Headermenu  Title={'DACC Admin'} Headermenudata={Headermenudata} /></div>
      </div>


      <div className="container">

        <aside className={ `${openedSideBar ? "openedSideBar" : "closedSideBar"}` }> Side Bar </aside>

        <main className="main"> {children} </main>

      </div>


      <div className="footer">Footer</div>

    </div>


  );


};

export default MasterPageLayout;




