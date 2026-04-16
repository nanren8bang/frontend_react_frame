import React, { useState, Fragment } from 'react'
 
//Import View
import BOListView from './BOListView'
import AddBOForm  from './AddBOForm'
import EditBOForm from './EditBOForm'

//Import CRUD API



const User = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
		{ id: 3, name: 'Ben', username: 'benisphere' },
	]

	const initBO = { id: null, name: '', username: '' }

         

	// CRUD operations

        ///1:Create
        const addBO = myBO => {
		myBO.id = myBOList.length + 1
		setMyBOList([ ...myBOList, myBO ])
	}
          

	///2:Read
        const readBOByID = id => {
                return myBOList.find(myBO => myBO.id === id);
		 
	}

        const readBOList = () => {
                return usersData;
		 
	}


        ///3:Update

        const editBO = myBO => {
		 
		//setCurrentBO({ id: myBO.id, name: myBO.name, username: myBO.username })
                setCurrentBO(myBO)
                setEditing(true)

	}


        const updateBO = (id, updatedBO) => {

		setMyBOList(myBOList.map(myBO => (myBO.id === id ? updatedBO : myBO)))
                setEditing(false)
	}
         


        ///4:Delete

        const deleteBO = id => {
		setEditing(false)

		setMyBOList(myBOList.filter(myBO => myBO.id !== id))
	}

         
        // Setting state
        const [ editing, setEditing ] = useState(false)
	 
        const [ myBOList, setMyBOList ] = useState(readBOList)

	const [ currentBO, setCurrentBO ] = useState(initBO)
	 

	return (
		<div className="container">
			<h1>Record Add/Edit/Delete Page</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Record</h2>
							<EditBOForm
								 
								setEditing={setEditing}
								currentBO={currentBO}
								updateBO={updateBO}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Record</h2>
							<AddBOForm addBO={addBO} initBO={initBO} />
						</Fragment>
					)}
				</div>

				<div className="flex-large">
					<h2>View Records</h2>
					<BOListView myBOList={myBOList} editBO={editBO} deleteBO={deleteBO} />
				</div>
			</div>
		</div>
	)
}

//export default App


export { User };