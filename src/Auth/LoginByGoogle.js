import React from 'react'
  

  // Initialize Firebase
  const LoginByGoogle = (props) => (
    <div>
        <button
            onClick={props.onLogInByEmailAndPasswordClickHandler}
        >
            Login by Google!
        </button>
    </div>
  )


   
  export default LoginByGoogle



