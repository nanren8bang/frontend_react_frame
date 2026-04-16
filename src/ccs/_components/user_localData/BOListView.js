import React from 'react'

const BOListView = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.myBOList.length > 0 ? (
        props.myBOList.map(myBO => (
          <tr key={myBO.id}>
            <td>{myBO.name}</td>
            <td>{myBO.username}</td>
            <td>

              <button
                onClick={() => {
                  props.editBO(myBO)
                }}
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
      ) : (
        <tr>
          <td colSpan={3}>No Records</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default BOListView
