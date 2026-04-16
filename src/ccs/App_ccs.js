
 import { useEffect, useState ,useContext} from 'react';
import { Routes, Route, Navigate, NavLink, useLocation } from 'react-router-dom';


import './App.css';

import MasterPageLayout from "./_masterpage/MasterPageLayout";

 
import Home                from './pages/Home';
import Visit               from './pages/Visit';
import DataMenu            from './pages/DataMenu';
import ReportMenu          from './pages/ReportMenu';
import DACCAdmin           from './pages/DACCAdmin';
import SiteAdmin           from './pages/SiteAdmin';
import Outcomes            from './pages/Outcomes';
import UnderConstruction   from './pages/UnderConstruction';
import MyAccount           from './pages/MyAccount';

import StudyResources      from './pages/StudyResources';
import StudyResourcesI     from './pages/StudyResourcesI';
import StudyResourcesII    from './pages/StudyResourcesII';
import StudyResourcesIII   from './pages/StudyResourcesIII';

import Logout              from './pages/Logout'; 

import GlobalContextProvider  from './_context/GlobalContextProvider';

function App_ccs() {

    const location = useLocation();
    //const { menuPath, setMenuPath } = useContext(GlobalContext);

    //useEffect( () => { setMenuPath(location.pathname);}, [location.pathname]);



  return (
   <GlobalContextProvider>
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
      <Route path="/StudyResourcesI"            element={<StudyResourcesI />} />
      <Route path="/StudyResourcesII"           element={<StudyResourcesII />} />
      <Route path="/StudyResourcesIII"          element={<StudyResourcesIII />} />



      <Route path="/Logout"                 element={<Logout />} />

     </Routes>     
    </MasterPageLayout>
   </GlobalContextProvider>
  );
}

export default App_ccs;
