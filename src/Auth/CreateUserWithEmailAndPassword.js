import React from 'react'

const CreateUserWithEmailAndPassword = (props) => (
    <div>
        <div>
            <div>
                <input type='email' onChange={props.onEmailChangedHandler} value={props.emailValue}/>
            </div>
            <div>
                <input type='password' onChange={props.onPasswordChangedHandler} value={props.passwordValue} />
            </div>
            <div>
                <button onClick={props.onSignUpClickHandler}>Zarejestruj!</button>
            </div>
        </div>
    </div>
)

export default CreateUserWithEmailAndPassword



