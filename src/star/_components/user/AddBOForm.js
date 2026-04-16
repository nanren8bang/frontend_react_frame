import React, { useState } from 'react'

const AddBOForm = props => {
	//const initBO = { id: null, name: '', username: '' }
	const [ myBO, setMyBO ] = useState(props.initBO)

	const handleInputChange = event => {
		const { name, value } = event.target

		setMyBO({ ...myBO, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!myBO.name || !myBO.username) return

				props.addBO(myBO)
				setMyBO(props.initBO)
			}}
		>
			<label>Name</label>
			<input type="text" name="name"     value={myBO.name}     onChange={handleInputChange} />
			<label>Username</label>
			<input type="text" name="username" value={myBO.username} onChange={handleInputChange} />
			<button>Add new record</button>
		</form>
	)
}

export default AddBOForm
