import React from 'react'
import User from './User'

const List = (props) => (
    <div>
        {
            props.users.map(user => (
                <User
                    key={user.key}
                    user={user}
                    onEditUserHandler={props.onEditUserHandler}
                />
            ))
        }
    </div>
)


export default List