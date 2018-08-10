import React from 'react'

const LogInByEmailAndPassword = (props) => (
    <div>
        <div>
            <div>
                <input type='email' onChange={props.onEmailChangedHandler} value={props.emailValue}/>
            </div>
            <div>
                <input type='password' onChange={props.onPasswordChangeHandler} value={props.passwordValue} />
            </div>
            <div>
                <button onClick={props.onLogInClickHandler}>Login!</button>
            </div>
        </div>
    </div>
)

export default LogInByEmailAndPassword



