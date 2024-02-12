import React from 'react'
// import Add from "../img/user-circle-solid-24.png"
import Pen from "../img/icons8-quill-pen-64.png"

export const Register = (props) => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            {<img src={Pen}/>}
            <span className='logo'>PenPals</span>
            <span className='logo'>Register</span>
            <form>
                <input type="text" placeholder='display name'/>
                <input type="email"  placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}} type="file" />
                {/* <label htmlFor='file'> */}
                    {/* <img src={Add} alt='' /> was for image but that will be in settings, some thing with line 2 and 12 */}
                    {/* <span>Add an avatar</span> */}
                {/* </label> */}
                <button>Sign up</button>
            </form>
            <p>
              You do have an account? {' '} 
              <button onClick={props.togglePage}>Login</button> 
            </p>
        </div>
    </div>
  )
}
