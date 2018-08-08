import React from 'react'

const Forms = (props) => (
    <div>
        <input
            type="text"
            value={props.newUserName}
            onChange={props.newUserChangeHandler}
        />
        <button onClick={props.addNewUser}>
            Add user!
        </button>
    </div>
)


export default Forms