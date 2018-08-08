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

    newUserChangeHandler = (event) => {
        this.setState({
            newUserName: event.target.value
        })
    }

    addNewUser = () => {
        // const newUserState = this.state.users.push(this.state.newUserName)
        // console.log(this.state.users)
        const request = {
            method: 'POST',
            body: JSON.stringify({name: this.state.newUserName})
        }

        fetch('https://test-4b9cd.firebaseio.com/JFDDL5-users.json', request)
        .then(response=>{this.loadUsers()
        this.setState({
            newUserName: ""
        })
        })
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
                        />
                        </div>
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