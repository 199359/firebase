import React from 'react'
import LoginByGoogle from './LoginByGoogle';
import LogInByEmailAndPassword from './LogInByEmailAndPassword'
import CreateUserWithEmailAndPassword from './CreateUserWithEmailAndPassword'

const LogInForms = (props) => (
    <div>
        <LoginByGoogle
            onLogInByEmailAndPasswordClickHandler={props.onLogInByEmailAndPasswordClickHandler}
        />
        <LogInByEmailAndPassword
            emailValue={props.logInProps.emailValue}
            passwordValue={props.logInProps.passwordValue}
            onEmailChangedHandler={props.logInProps.onEmailChangedHandler}
            onPasswordChangedHandler={props.logInProps.onPasswordChangedHandler}
            onLogInClickHandler={props.logInProps.onLogInByEmailAndPasswordClickHandler}
        />
        <CreateUserWithEmailAndPassword
            emailValue={props.signUpProps.emailValue}
            passwordValue={props.signUpProps.passwordValue}
            onEmailChangedHandler={props.signUpProps.onEmailChangedHandler}
            onPasswordChangedHandler={props.signUpProps.onPasswordChangedHandler}
            onSignUpClickHandler={props.signUpProps.onSignUpByEmailAndPasswordClickHandler}
        />
    </div>
)


export default LogInForms