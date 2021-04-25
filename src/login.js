import React, {useState} from 'react'
import { Redirect, Link, useHistory  } from 'react-router-dom'
import GenerateJackpot from './jackpot-generate'


export default function Login() {
    const [username, setUsername] = useState("")
    let history = useHistory();

    const onLogin = (e) => {
        e.preventDefault()
        const { username, password } = e.target.elements

        if (username.value == "test") {
            console.log(username.value)
            history.push('/generate')
        }
    }
    return (
        <div className="container p-5 d-flex justify-content-center">
        <form onSubmit={onLogin}>
            <div className="form-group">
                <label>Username</label>
                <input name="username" type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input name="password" type="password" className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-success">Login</button>
            </form>
        </div>
    )
}
