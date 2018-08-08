import React from 'react'
import Default from './Default'
import Loading from './Loading'
import List from './List'
import mapObjectToArray from '../utils'
import Forms from './Forms'


class UserList extends React.Component {
    state = {
        newUserName: '',
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
                this.setState({
                    users: mapObjectToArray(data)
                })
            })
    }

    newUserChangeHandler = (event) => {
        this.setState({
            newUserName: event.target.value
        })
    }

    addNewUser = () => {
        const request = {
            method: 'POST',
            body: JSON.stringify({ name: this.state.newUserName })
        }

        fetch('https://test-4b9cd.firebaseio.com/JFDDL5-users.json', request)
            .then(response => {
                this.loadUsers()
                this.setState({
                    newUserName: ""
                })
            })
    }

    onEditUserHandler = (key, newName) => {
        console.log(key, newName)

        const request = {
            method: 'PATCH',
            body: JSON.stringify({ name: newName })
        }

        fetch(`https://test-4b9cd.firebaseio.com/JFDDL5-users/${key}.json`, request)
            .then(() => {this.loadUsers()})
    }

    render() {
        return (
            <div>
                {this.state.isLoadingUsers ?
                    <Loading />
                    :
                    this.state.users ?
                        <div>
                            <Forms
                                newUserName={this.state.newUserName}
                                newUserChangeHandler={this.newUserChangeHandler}
                                addNewUser={this.addNewUser}
                            />
                            <List
                                users={this.state.users}
                                onEditUserHandler={this.onEditUserHandler}
                            />
                        </div>
                        :
                        <Default
                            label={'Click'}
                            clickHandler={this.loadUsers}
                        />
                }
            </div>
        )
    }
}

export default UserList