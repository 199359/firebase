import React from 'react'
import Default from './Default'
import Loading from './Loading'
import List from './List'
import mapObjectToArray from '../utils'


class UserList extends React.Component {
    state = {
        users: null,
        isLoadingUsers: false
    }

    loadUsers = () => {

        this.setState({
            isLoadingUsers: true
        })

        fetch('https://test-4b9cd.firebaseio.com/JFDDL5-users.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    users: Object.entries(data),
                    isLoadingUsers: false
                })
                console.log(data)
                // const newArr = this.state.users.map(el => {
                //     return {
                //         ...el[1], //lepiej najpierw dac elementy a pozniej id
                //         id: el[0] // bo jakby bylo cos co se nazwya id to by sie napdpisalo
                //     }
                // }
                // )
                this.setState({
                    users: mapObjectToArray(data)
                })
                console.log(this.state)
            })
    }

    render() {
        return (
            <div>
                {this.state.isLoadingUsers ?
                    <Loading />
                    :
                    this.state.users ?
                        <List />
                        :
                        <Default
                            label={'Click'}
                            clickHandler={this.loadUsers}
                        />}
            </div>
        )
    }
}

export default UserList