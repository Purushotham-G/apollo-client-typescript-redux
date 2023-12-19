import React from 'react'

const Form = () => {
  return (
    <>
        <form>
            <label htmlFor='userName' >User Name</label>
            <input type="text" id='username' name="username"/>

            <label htmlFor='userName' >email</label>
            <input type="email" id='email' name="email"/>

            <label htmlFor='userName' >User Name</label>
            <input type="text" id='channel' name="channel"/>

            <button>submit</button>
        </form>
    </>
  )
}

export default Form