import React, { useState, useEffect } from 'react'

const EditBOForm = props => {

  const [ myBO, setMyBO ] = useState(props.currentBO)

  useEffect(
    () => {
      setMyBO(props.currentBO)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setMyBO({ ...myBO, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateBO(myBO.id, myBO)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={myBO.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={myBO.username} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditBOForm
