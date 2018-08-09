import React from 'react'
import Default from './Default'
import Loading from './Loading'
import List from './List'
import mapObjectToArray from '../utils'
import Forms from './Forms'
import database from '../firebaseConfig'
import Search from './Search'

class UserList extends React.Component {
    state = {
        newUserName: '',
        users: null,
        isLoadingUsers: false,
        searchPhrase: ''
    }

    initUserSync = () => {
        this.setState({
            isLoadingUsers: true
        })

        database.ref('/JFDDL5-users').on(
            'value',
            snapshot => {
                const data = snapshot.val()
                this.setState({
                    users: mapObjectToArray(data),
                    isLoadingUsers: false
                })
            }
        )
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
            .then(response => {this.setState({
                    newUserName: ""
                })
            })
    }

    onEditUserHandler = (key, newName) => {

         database.ref(`/JFDDL5-users/${key}`).update({ name: newName})
        
        // return fetch(`https://test-4b9cd.firebaseio.com/JFDDL5-users/${key}.json`, request)
        // const request = {
        //     method: 'PATCH',
        //     body: JSON.stringify({ name: newName })
        // }  
    }

    onSearchPhraseChanged = (event) => {
        this.setState({
            searchPhrase: event.target.value
        })
    }


    render() {
        const filteredUserd = this.state.users && 
        this.state.users.filter(
            user => user.name.indexOf(this.state.searchPhrase) !== -1
        )
    
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
                            <Search 
                                searchPhrase = {this.state.searchPhrase}
                                onSearchPhraseChanged = {this.onSearchPhraseChanged}
                            />
                            <List
                                users={filteredUserd}
                                onEditUserHandler={this.onEditUserHandler}
                            />
                        </div>
                        :
                        <Default
                            label={'Click'}
                            clickHandler={this.initUserSync}
                        />
                }
            </div>
        )
    }
}

export default UserList