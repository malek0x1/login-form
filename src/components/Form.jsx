import React from 'react'
import TextField from './TextField'
import './Form.css';
import { Person, PersonAddDisabledSharp, PersonOutline } from '@material-ui/icons';
const Form = () => {
    return (
        <div className="form-wrapper">
            <div className="form">
                <form>
                <div className="avatar">
                    <div className="icon-parent">
                        <PersonOutline className="icon" />
                    </div>
                </div>
                <div className="title"><h1>Welcome Back</h1></div>

                <TextField error="Username should be 6-16 characters" pattern="^[A-Za-z0-9]{6,16}$" placeholder="Enter your Username" type="text" label="Username" />
                <TextField error=" example: malek@gmail.com" placeholder="Enter your email" type="email" label="Email" />
                <TextField error="Password should be 8-20 characters , numbers , special chars" pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$" placeholder="Enter your Password" type="password" label="Password" />

                <div className="remember">
                    <input id="me" type="checkbox" />
                    <label for="me"> Remember me</label>
                </div>
                <div className="button-parent">
                    <button>Login</button>
                </div>
                <div className="form-footer">
                    <a href="#" >Forget Password ?</a>
                    <a href="#" >Dont have an Account ?</a>
                </div>
                </form>
            </div>

        </div>
    )
}

export default Form