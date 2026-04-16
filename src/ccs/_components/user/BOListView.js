import React from 'react'

const BOListView = props => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
       
      {props.myBOList==null ?  (
        <tr>
          <td colSpan={3}>No Records</td>
        </tr>
      ):(
        props.myBOList.map(myBO => (
          <tr key={myBO.id}>

            <td>{myBO.id}</td>
            <td>{myBO.name}</td>
            <td>{myBO.email}</td>
             
            <td>

              <button
                onClick={ () => { props.editBO(myBO)
                                }
                        }
                className="button muted-button"
              >
                Edit
              </button>

              <button
                onClick={() => props.deleteBO(myBO.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) }
    </tbody>
  </table>
)

export default BOListView
