

import { useEffect, useState ,useContext} from 'react';
import { Routes, Route, Navigate, NavLink, useLocation } from 'react-router-dom';

//====

import './App.css';

import MasterPageLayout from "./_masterpage/MasterPageLayout";

//import{Routes, Route} from 'react-router-dom';

 
import Home                from './ccs/pages/Home';
import Visit               from './ccs/pages/Visit';
import DataMenu            from './ccs/pages/DataMenu';
import ReportMenu          from './ccs/pages/ReportMenu';
import DACCAdmin           from './ccs/pages/DACCAdmin';
import SiteAdmin           from './ccs/pages/SiteAdmin';
import Outcomes            from './ccs/pages/Outcomes';
import UnderConstruction   from './ccs/pages/UnderConstruction';
import MyAccount           from './ccs/pages/MyAccount';

import StudyResources      from './ccs/pages/StudyResources';
import StudyResourcesI      from './ccs/pages/StudyResourcesI';
import StudyResourcesII      from './ccs/pages/StudyResourcesII';
import StudyResourcesIII      from './ccs/pages/StudyResourcesIII';

import Logout              from './ccs/pages/Logout'; 

import GlobalContext  from './_context/GlobalContext';

function App() {

    const location = useLocation();
    const { menuPath, setMenuPath } = useContext(GlobalContext);

    useEffect( () => {
                      // execute on location change
                      //setCount(count + 1);
                      //console.log('Location changed!', location.pathname);
                      setMenuPath(location.pathname);
                     }, [location]);



  return (
    
    <MasterPageLayout>
     <Routes>

      <Route path="/"                       element={<Home />} />
      <Route path="/Visit"                  element={<Visit />} />
      <Route path="/DataMenu"               element={<DataMenu />} />
      <Route path="/ReportMenu"             element={<ReportMenu />} />
      <Route path="/DACCAdmin"              element={<DACCAdmin />} />
      <Route path="/SiteAdmin"              element={<SiteAdmin />} />
      <Route path="/Outcomes"               element={<Outcomes />} />
      <Route path="/UnderConstruction"      element={<UnderConstruction />} />
      <Route path="/MyAccount"              element={<MyAccount />} />

      <Route path="/StudyResources"         element={<StudyResources />} />
      <Route path="/StudyResourcesI"         element={<StudyResourcesI />} />
      <Route path="/StudyResourcesII"         element={<StudyResourcesII />} />
      <Route path="/StudyResourcesIII"         element={<StudyResourcesIII />} />



      <Route path="/Logout"                 element={<Logout />} />

     </Routes>     
    </MasterPageLayout>
    
  );
}

export default App;
