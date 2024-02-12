import React from 'react';
import Pen from "../img/icons8-quill-pen-64.png"

export const Login = (props) => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
          
            {<img src={Pen}/>}
            <span className='logo'>PenPals</span>
            
            
            <form>
                <input type="email" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                
                <button>Login</button>
            </form>
            <p>
              
              <button onClick={props.togglePage}>Sign up here</button> 
            </p>
        </div>
    </div>
  );
};
