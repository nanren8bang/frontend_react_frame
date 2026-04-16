 
import React, { useState, useEffect,Fragment } from 'react';
 
import './index.css'; 

//Step 1: Import View
import BOListView from './BOListView'
import AddBOForm  from './AddBOForm'
import EditBOForm from './EditBOForm'

//Steps 2: Import CRUD service API

import { userService as myService} from '../../_services';
 

const User = () => {
	 

	const initBO = { id: null, name: '', email: '' }

         

	// CRUD operations

        ///1:Create
        const addBO = myBO => {
		myService.create(myBO).then(x=>{   setMyBOList([ ...myBOList, x ]); });

               // console.log("In usr Index addBO, the returned value of create_myBO is "+tempBO);
 
	}
          

	///2:Read
        const getBOByID = id => {
                myService.getBOById(id).then(x => {return x;} ) ; 
		 
	}

        const getBOList = () => {
                myService.getBOList().then(x => {return x;} ) ; 
	}


        ///3:Update

        const editBO = myBO => {
		 
		//setCurrentBO({ id: myBO.id, name: myBO.name, username: myBO.username })
                setCurrentBO(myBO)
                setEditing(true)

	}


        const updateBO = (id, updatedBO) => { 
                myService.update(id, updatedBO);
                setMyBOList(myBOList.map(myBO => (myBO.id === id ? updatedBO : myBO)));
                setEditing(false);
	}
         


        ///4:Delete

        const deleteBO = id => {  
                myService.delete(id);
                setMyBOList(myBOList.filter(myBO => myBO.id !== id));
                setEditing(false);
	}

         
        
	 // Setting state
        const [ editing, setEditing ] = useState(false);
	 
        const [ myBOList, setMyBOList ] = useState(null);

	const [ currentBO, setCurrentBO ] = useState(initBO);

        useEffect(  () => {myService.getBOList().then( x => setMyBOList(x) );}, []);
 
         

	return (
		<div className="main-container">
			<h1 className="main-header" >Record Creat/Read/Update/Delete Page</h1>
			<div className="flex-Row">
				<div className="flex-AddEdit">
					{editing ? (
						<Fragment>
							<h2>Record Edit</h2>
							<EditBOForm
								 
								setEditing={setEditing}
								currentBO={currentBO}
								updateBO={updateBO}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Record Add</h2>
							<AddBOForm addBO={addBO} initBO={initBO} />
						</Fragment>
					)}
				</div>

				<div className="flex-List">
					<h2>Records List</h2>
					<BOListView myBOList={myBOList} editBO={editBO} deleteBO={deleteBO} />
				</div>
			</div>
		</div>
	)
}
 


export  { User };