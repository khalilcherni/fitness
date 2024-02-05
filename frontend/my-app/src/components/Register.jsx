import React from 'react'

function Register() {
  return (
    <div>
        <div>
            <h2>Sign up</h2>
            <form action="">
                <label htmlFor="name"><strong>Name</strong></label>
                <input type="text" placeholder="name" id="name"/>
            </form>
        </div>
        <div>
           
            <form action="">
                <label htmlFor="Email"><strong>Email</strong></label>
                <input type="text" placeholder="Email" id="Email"/>
            </form>
        </div>
        <div>
        
            <form action="">
                <label htmlFor="Password"><strong>Password</strong></label>
                <input type="text" placeholder="Password" id="Password"/>
            </form>
        </div>
        <button type='submit'>Sign up</button>
    </div>
  )
}

export default Register