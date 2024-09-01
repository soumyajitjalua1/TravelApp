import React from 'react'
// import Login from './login'
import './Sign_out.css'
const Sign_out = () => {
  return (
    <div>
        <div className='signOut-heading'>
            <h1 className='signOut-title'>Bye!</h1>
            <p className='signOut-p'>We’ll miss you! See you next time 😊</p>
            <button className='againSignin'>
                <a href='/login' className='againSignin-link'>Sign in</a>
            </button>
        </div>
    </div>
  )
}

export default Sign_out