
import React, {useState } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {Link} from 'react-router-dom'


import {usePostUserMutation} from '../../fetcher/allFetcherSlice'
// import axios from 'axios'
const Register = () => {
    const [user, setUser] = useState({name : '', email : '', password : '', Cpassword : ''})
    const {name, email, password, Cpassword} = user;
    const [sendDatas, show] = usePostUserMutation();
    let {isLoading, isSuccess, isError} = show;
    const [text] = useTypewriter({
        words: ['Node JS','Express JS','MongoDB','React JS', 'Redux', 'Socket.Io'],
        loop: {},
    })
    const handelInput = (e)=>{
        setUser(
            {...user, [e.target.name] : e.target.value}
        )
    }
    // const configApi = {
    //     headers :{"Content-Type" : "application/json"}
    // }
    // const callFetch = ()=>{
    //      axios.post("http://localhost:5000/registerUser", user, configApi)
    //      .then((res)=>console.log(res))
    //      .catch((err)=> console.log(err))
    // }
    const handelSubmit = (e)=>{
        e.preventDefault();
        console.log(user)
        // callFetch()
        sendDatas(user)
        console.log(show)
    }
  return (
    <div className='container'>
      <div></div>
      <div className='row pb-5'>
      <div className='col-md-5'>
        <div className='hero_SIde'>
            <h3 className='heroText'>This is Reall Time Chat App</h3>
            <div className='mt-5'>
                <h3> This app Useing {text}<Cursor cursorStyle='_'/></h3>
            </div>
        </div>
      </div>
      <div className='col-md-7'>
        <div className='row pb-5'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
                <div className='register-page'>
                <div>
                    <h3>Register Here</h3>
                    {isLoading && <p>Loading.....</p>}
                    {isSuccess && <p>Successfully Register</p>}
                    {isError && <p>Authontaction Failed</p>}
                    <form onSubmit={handelSubmit}>
                        <div className='form-group'>
                            <label htmlFor='name'> Name</label>
                            <input type="text" id="name" name='name' className='form-control'  placeholder='Name' value={name} onChange={handelInput} required/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'> Email</label>
                            <input type="email" id="email" name='email' className='form-control'  placeholder='Email' value={email} onChange={handelInput} required/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type="password" id="password" name='password' className='form-control'  placeholder='Password' value={password} onChange={handelInput} required/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='Cpassword'>Confirm Password</label>
                            <input type="password" id="Cpassword" name='Cpassword' className='form-control'  placeholder='Confirm Password' value={Cpassword} onChange={handelInput} required/>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-bgs" type="submit">Register</button>
                        </div>
                        <div className='form-group mt-3'>
                           <p>If You have an account Plcese <Link to="/login">Log In</Link></p>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            <div className='col-md-2'></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Register
