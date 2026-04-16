
import  { useState,useContext  } from "react";
 
import  MenuIcon        from "@mui/icons-material/Menu";
import  ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import  "./MasterPageLayout.css";

import  Headermenu     from "./Headermenu";
import  Sidebarmenu    from "./Sidebarmenu";
//import  GlobalContext  from "../_context/GlobalContext";


const MasterPageLayout = ({ children }) => {
   
  const [openedSideBar, setOpenedSideBar]     = useState(true);

   
  //const { menuPath} = useContext(GlobalContext);

  //console.log("In MasterPageLayout, the default menuPath="+ `${menuPath}` );
   
   
  return (
    <div className="App">

      <div className="header">

        <div className="icon" onClick={() => setOpenedSideBar(!openedSideBar)}>
           {openedSideBar ? <ChevronLeftIcon /> : <MenuIcon />}
           
        </div>

        <div className="header-title"> < Headermenu  Title={'STAR'}   /> </div>
      </div>


      <div className="container">

        <aside className={ `${openedSideBar ? "openedSideBar" : "closedSideBar"}` }>   
                  < Sidebarmenu  />  
        </aside> 


        <main className="main"> {children} </main>

      </div>


      <div className="footer">Footer</div>

    </div>


  );


};

export default MasterPageLayout;




