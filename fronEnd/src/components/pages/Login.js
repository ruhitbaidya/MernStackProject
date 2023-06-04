
import React, {useState } from 'react'
import {Link} from 'react-router-dom'
import {useLoginMatchMutation} from '../../fetcher/allFetcherSlice'
const Login = () => {
    const [user, setUser] = useState({ email : '', password : ''})
    const {email, password} = user;
    const [setData, showCommand] = useLoginMatchMutation();
    const {isLoading, isError, isSuccess} = showCommand;
    const handelInput = (e)=>{
        setUser(
            {...user, [e.target.name] : e.target.value}
        )
    }
    const handelSubmit = (e)=>{
        e.preventDefault();
        setData(user)
        console.log(user)
    }
  return (
    <div className='container'>
      <div className='row py-5'>
            <div className='col-md-4'></div>
            <div className='col-md-4 pb-5'>
                <div className='register-page'>
                <div>
                    <h3>Login Here</h3>
                    {isLoading && <p>Loading.....</p>}
                    {isSuccess && <p>Successfully Register</p>}
                    {isError && <p>Authontaction Failed</p>}
                    <form onSubmit={handelSubmit}>
                        <div className='form-group'>
                            <label htmlFor='email'> Email</label>
                            <input type="text" id="email" name='email' className='form-control'  placeholder='Email' value={email} onChange={handelInput} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type="text" id="password" name='password' className='form-control'  placeholder='Password' value={password} onChange={handelInput} />
                        </div>
                      
                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-bgs" type="submit">Login</button>
                        </div>
                        <div className='form-group mt-3'>
                           <p>If You have No Account Please <Link to="/">Register</Link></p>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            <div className='col-md-4'></div>
        </div>
    </div>
  )
}

export default Login
