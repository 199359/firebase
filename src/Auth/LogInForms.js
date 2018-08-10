import React from 'react'
import LoginByGoogle from './LoginByGoogle';
import LogInByEmailAndPassword from './LogInByEmailAndPassword'

const LogInForms = (props) => (
    <div>
        <LoginByGoogle
            onLogInClickHandler={props.onLogInClickHandler}
        />
        <LogInByEmailAndPassword
            emailValue={props.emailValue}
            passwordValue={props.passwordValue}
            onLogInClickHandler={props.onLogInClickHandler}
            onPasswordChangedHandler={props.onPasswordChangedHandler}
            onLogInClickHandler={props.onLogInClickHandler}
        />
    </div>
)


export default LogInForms