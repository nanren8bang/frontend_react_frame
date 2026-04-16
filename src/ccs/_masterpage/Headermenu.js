import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./Headermenu.css";
import  Headermenudata from "./Headermenudata";
 

const Headermenu = ({Title}) => {
  const [navs] = useState( Headermenudata.filter((myBO) => myBO.parent_path === '' ) );
  return (
    <div  className='menu'>

      <div>
        <h1 className='h1'>{Title}</h1>
      </div>

       <div  className='menu-list'>

         <ul className='menu-list'>

            {navs.map((nav, index) => (
                                       <li key={index} className='menu-item'>

                                           <NavLink to={nav.path} className='navs'>
                                             {nav.title}
                                           </NavLink>

                                       </li>

                                      )
                       )
            }

         </ul>

      </div>

    </div>
  );
}

export default Headermenu;

