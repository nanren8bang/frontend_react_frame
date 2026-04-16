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
    <form  style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center' }}
           onSubmit={event => {
                               event.preventDefault()
                               props.updateBO(myBO.id, myBO)
                              }
                    }
    >
      <label>Name</label>
      <input type="text" name="name" value={myBO.name} onChange={handleInputChange} />

      <label>Email</label>
      <input type="text" name="email" value={myBO.email} onChange={handleInputChange} />

      <button>Update Record</button>

      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>

    </form>
  )
}

export default EditBOForm
