import React from 'react'

class User = (props) => (
    <div>
        <button>Edit</button>
        {props.user.name}
    </div>
)


export default User