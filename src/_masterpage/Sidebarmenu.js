
import { useState ,useContext,useEffect} from 'react'
import {NavLink, useLocation } from 'react-router-dom';


import "./Sidebarmenu.css";
import  Headermenudata from "./Headermenudata";
import GlobalContext  from "../_context/GlobalContext";

const Sidebarmenu = () => {
   
  const location = useLocation();

  const { menuPath, setMenuPath } = useContext(GlobalContext);
  //let myBOList= Headermenudata.filter((myBO) => myBO.parent_path === `${menuPath}` ) ;

  const [sidebarMenuData, setSidebarMenuData] = useState(Headermenudata.filter((myBO) => myBO.parent_path === `${menuPath}` ) );

  let secondLevelMenu =null;    

  useEffect( () => {
                      // execute on location change 

                      //if( menuPath!==location.pathname) {
                          
                         console.log('Location changed!, old path='+`${menuPath}`+"  New path="+location.pathname);

                         secondLevelMenu=Headermenudata.find(myMenu => myMenu.path === location.pathname);
                         if (secondLevelMenu.parent_path===''){
                                                             //console.log('Location changed!, old path='+`${menuPath}`);
                                            setSidebarMenuData(Headermenudata.filter((myBO) => myBO.parent_path ===  location.pathname ) );
                                                             setMenuPath(location.pathname); 
                                                              //console.log('Now chnaged to NEW  path='+`${location.pathname}`);

                                                             
                                         console.log('Location changed!, old path='+`${menuPath}`+"  New path is first level menu="+location.pathname);

                         }else{ 
                                 
                                //myBOList= Headermenudata.filter((myBO) => myBO.parent_path === `${menuPath}` ) ;
                                console.log("The new path is second level menu , keep menuPath AS IS ="+`${menuPath}`); 
                              }
                      //} 
                         
                       

                     }, [location.pathname]);

  return (

    <div className='sidemenu'>

      <div>
        <h1 className='h1'> Side Bar Menu</h1>
      </div>

      <div className='sidemenu-list'>

          <ul >

          { sidebarMenuData.map((myBO, index) => (
              <li key={index} className='sidemenu-item'>

                 <NavLink to={myBO.path} className='menu-item'>
                    {myBO.title}
                 </NavLink>

            </li>

           ))
         }

      </ul>

     </div>

    </div>
  );
}

export default Sidebarmenu;

