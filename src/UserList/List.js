import React from 'react'
import User from './User'

const List = (props) => (
    <div>
        {
            props.users.map(user => (
                <User
                    key={user.key}
                    user={user}
                />
            ))
        }
    </div>
)


export default List