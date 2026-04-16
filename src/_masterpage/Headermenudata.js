
import React from 'react';
 
import Home               from '../ccs/pages/Home';
import Visit              from '../ccs/pages/Visit';
import DataMenu           from '../ccs/pages/DataMenu';
import ReportMenu         from '../ccs/pages/ReportMenu';
import DACCAdmin          from '../ccs/pages/DACCAdmin';
import SiteAdmin          from '../ccs/pages/SiteAdmin';
import Outcomes           from '../ccs/pages/Outcomes';
import UnderConstruction  from '../ccs/pages/UnderConstruction';
import MyAccount          from '../ccs/pages/MyAccount';
import Logout             from '../ccs/pages/Logout'; 


const Headermenudata = [
    {
        title: 'Home',
        parent_path: '',
        path: '/',
        element: 'Home',
    },

    {
        title: 'Study Resources',
        parent_path: '',
        path: '/StudyResources',
        element: 'StudyResources' ,
    },

/* Sub menu for Study Resources*/

   {
        title: 'Study Resources I',
        parent_path: '/StudyResources',
        path: '/StudyResourcesI',
        element: 'StudyResourcesI' ,
    },
{
        title: 'Study Resources II',
        parent_path: '/StudyResources',
        path: '/StudyResourcesII',
        element: 'StudyResourcesII' ,
    },
{
        title: 'Study Resources III',
        parent_path: '/StudyResources',
        path: '/StudyResourcesIII',
        element: 'StudyResourcesIII' ,
    },




    {
        title: 'Visit',
        parent_path: '',
        path: '/Visit',
        element:'Visit' ,
    },

/* Sub menu for Study Resources*/

{
        title: 'Visit1',
        parent_path: '/Visit',
        path: '/Visit1',
        element:'Visit1' ,
    },
{
        title: 'Visit2',
        parent_path: '/Visit',
        path: '/Visit2',
        element:'Visit2' ,
    },
{
        title: 'Visit3',
        parent_path: '/Visit',
        path: '/Visit3',
        element:'Visit3' ,
    },




    {
        title: 'Data Menu',
        parent_path: '',
        path: '/DataMenu',
        element:'DataMenu' ,
    },
    {
        title: 'Report Menu',
        parent_path: '',
        path: '/ReportMenu',
        element: 'ReportMenu',
    },

    {
        title: 'DACC Admin',
        parent_path: '',
        path: '/DACCAdmin',
        element: 'DACCAdmin',
    },
    {
        title: 'Site Admin',
        parent_path: '',
        path: '/SiteAdmin',
        element: 'SiteAdmin' ,
    },
    {
        title: 'Outcomes',
        parent_path: '',
        path: '/Outcomes',
        element: 'Outcomes',
    },
    {
        title: 'SubStudy/Supplements',
        parent_path: '',
        path: '/UnderConstruction',
        element: 'UnderConstruction',
    },
    {
        title: 'MyAccount',
        parent_path: '',
        path: '/MyAccount',
        element: 'MyAccount',
    },
    {
        title: 'Logout',
        parent_path: '',
        path: '/Logout',
        element: 'Logout',
    },
];

export default Headermenudata;
