import React from 'react'
import LogInForms from './LogInForms'
import { auth, googleProvider } from '../firebaseConfig'
import LoginByGoogle from './LoginByGoogle'
import LogInByEmailAndPassword from './LogInByEmailAndPassword'
import firebase from 'firebase'

class Auth extends React.Component {
    state = {
        isLogedIn: false,
        logInEmail: '',
        logInPassword: '',
        signUpEmail: '',
        signUpPassword: ''
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    isLogedIn: true
                })
            } else {
                this.setState({
                    isLogedIn: false
                })
            }
        })
    }

    logInFunctions = {
        onEmailChangedHandler: (event) => {
            this.setState({ logInEmail: event.target.value })
        },
        onPasswordChangedHandler: (event) => {
            this.setState({ logInPassword: event.target.value })
        },

        onLogInByEmailAndPasswordClickHandler: () => {
            auth.signInWithEmailAndPassword(this.state.logInEmail, this.state.logInPassword)
                .catch((error) => {
                    console.log(error)
                    alert('Błąd logowania!')
                })
        }
    }

    onLogInByEmailAndPasswordClickHandler = () => {
        auth.signInWithPopup(googleProvider)
            .catch((error) => {
                console.log(error)
                alert('Błąd logowania!')
            })
    }

    signUpFunctions = {
        onEmailChangedHandler: (event) => {
            this.setState({ signUpEmail: event.target.value })
        },
        onPasswordChangedHandler: (event) => {
            this.setState({ signUpPassword: event.target.value })
        },
        onSignUpByEmailAndPasswordClickHandler: () => {
            auth.createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword)
                .catch((error) => {
                    console.log(error)
                    alert('Błąd logowania!')
                })
        }
    }


    render() {
        return (
            <div>
                {
                    this.state.isLogedIn ?
                        <div>
                            <div>
                                <button onClick={()=>auth.signOut()}>
                                    Sing out!
                                </button>
                            </div>
                            {this.props.children}
                        </div>
                        :
                        <LogInForms
                            onLogInByEmailAndPasswordClickHandler={this.onLogInByEmailAndPasswordClickHandler}
                            logInProps={{
                                onLogInByEmailAndPasswordClickHandler: this.onLogInByEmailAndPasswordClickHandler,
                                emailValue: this.state.logInEmail,
                                passwordValue: this.state.logInPassword,
                                onEmailChangedHandler: this.logInFunctions.onEmailChangedHandler,
                                onPasswordChangedHandler: this.logInFunctions.onPasswordChangedHandler,
                                onLogInByEmailAndPasswordClickHandler: this.logInFunctions.onLogInByEmailAndPasswordClickHandler
                            }}
                            signUpProps={{
                                emailValue: this.state.signUpEmail,
                                passwordValue: this.state.signUpPassword,
                                onEmailChangedHandler: this.signUpFunctions.onEmailChangedHandler,
                                onPasswordChangedHandler: this.signUpFunctions.onPasswordChangedHandler,
                                onSignUpByEmailAndPasswordClickHandler: this.signUpFunctions.onSignUpByEmailAndPasswordClickHandler
                            }}
                        />

                }
            </div>
        )
    }
}


export default Auth