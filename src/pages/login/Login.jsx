import React from 'react'

import './login.scss'

import { Link } from 'react-router-dom'

import bg from '../../assets/footer-bg2.jpg'

import Button from '../../components/button/Button'
import Input from '../../components/input/Input'

import logo from '../../assets/logo.png'
import Helmet from '../../components/Helmet'

const Login = () => {
    return (
        <React.Fragment>
            <Helmet title="Login">
                <form action="#" method="POST">
                    <div className="form">
                        <div className="form-left" style={{ backgroundImage: `url(${bg})` }}>
                            <div className="form-left__overlay">
                                <img src={logo} alt="" />
                                <h1>MyMovie</h1>
                                <span>
                                    <p>Login with social media</p>
                                    <Link to="/fb"><i className='bx bxl-facebook' ></i> Login with Facebook</Link>
                                    <br />
                                    <Link to="/fb"><i className='bx bxl-facebook' ></i> Login with Facebook</Link>
                                </span>
                            </div>
                        </div>
                        <div className="form-right">
                            <h1>Login</h1>
                            <p>Don't have an account? <Link to="/register"><span>Creat Your Account</span></Link> it takes less than a minute</p>
                            <div className="form-right__input">
                                <Input type="text" placeholder="User name" />
                                <Input type="password" placeholder="Password" />
                            </div>
                            <div className="form-right__remember">
                                <label>
                                    <input type="checkbox" name="item" />
                                    <span className="text-checkbox">Remember me</span>
                                </label>
                                <Link to="/forgot-password">Forget password?</Link>
                            </div>
                            <div className="form-right__btn">
                                <Button className="form-right__btn__login">Login</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </Helmet>
        </React.Fragment>
    )
}

export default Login