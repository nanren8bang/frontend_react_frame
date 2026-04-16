import { useState } from 'react'
 
import{Routes, Route}from 'react-router-dom'


const data = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Study Resources',
        link: '/StudyResources',
    },
    {
        title: 'Visit',
        link: '/Visit',
    },
    {
        title: 'Data Menu',
        link: '/DataMenu',
    },
    {
        title: 'Report Menu',
        link: '/ReportMenu',
    },

    {
        title: 'DACC Admin',
        link: '/DACCAdmin',
    },
    {
        title: 'Site Admin',
        link: '/SiteAdmin',
    },
    {
        title: 'Outcomes',
        link: '/Outcomes',
    },
    {
        title: 'SubStudy/Supplements',
        link: '/UnderConstruction',
    },
    {
        title: 'MyAccount',
        link: '/MyAccount',
    },
    {
        title: 'Logout',
        link: '/Logout',
    },
];


 

const Headernav = ({Headermenudata}) => {
  const [navs] = useState(Headermenudata);

  return (
          
         <Routes>

                 {
                   navs.map( 
                            (nav, index) => ( 
                                              <Route path='{nav.path}' element={< nav.element />} 
                                              />  
                                            )
                            )
                 }


        </Routes>
 
  );
}

export default Headernav;

