import React, { useState } from 'react'

const AddBOForm = props => {
	//const initBO = { id: null, name: '', username: '' }
	const [ myBO, setMyBO ] = useState(props.initBO)

	const handleInputChange = event => {
		const { name, value } = event.target

		setMyBO({ ...myBO, [name]: value })
	}

	return (
		<form   style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center' }}
			onSubmit={event => {
				event.preventDefault()
				if (!myBO.name || !myBO.email) return

				props.addBO(myBO)
				setMyBO(props.initBO)
			}}
		>
			<label>Name</label>
			<input type="text" name="name"     value={myBO.name}     onChange={handleInputChange} />
			<label>Email</label>
			<input type="text" name="email"    value={myBO.email}    onChange={handleInputChange} />

			<button>Add new record</button>
		</form>
	)
}

export default AddBOForm
