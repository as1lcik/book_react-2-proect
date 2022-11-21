import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Login(props) {
    return (
        <div>
            <Navbar/>

            <div className="login-form-container">

                <div id="close-login-btn" className="fas fa-times"></div>

                <form action="">
                    <h3>sing in</h3>
                    <span>usename</span>
                    <input type="email" className='box' placeholder='enter your email'/>
                    <span>password</span>
                    <input type="password" className='box' placeholder='enter your password' />
                    <input type="submit" value='sing in' className='btn'/>
                    <p>forget password ? <a href="#">click here</a></p>
                    <p>don't have an account ? <a href="#">create one</a></p>
                </form>

            </div>
            <Footer/>
        </div>
    );
}

export default Login;