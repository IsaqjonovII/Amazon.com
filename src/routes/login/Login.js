import React, { useState } from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom';
import { AiFillCaretRight } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { auth, googleProvider, firebase } from '../../firebase/firebase';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const loginUser = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(user => {
                if (user) {
                    history.push("/")
                }
            })
            .catch(err => console.log(err))
    }

    const signInwithGoogle = () => {
        auth.signInWithPopup(googleProvider)
            .then(user => console.log(user))
            .catch(err => console.log(err));
    }

    const verifyThePhone = () => {
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        firebase.auth().signInWithPhoneNumber(number, recaptcha)
            .then(e => {
                let code = prompt("Iltimos konfirmatsiya kodni kiriting")
                if (code === null) {
                    return
                }
                e.confirm(code).then(user => {
                    console.log(user)
                })
            })
            .catch(err => console.log(err));

    }

    return (
        <div className="login">
            <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" /></Link>
            <form onSubmit={loginUser}>
                <div className="sign_in">
                    <h1>Sign-In</h1>
                    <h5>Email or phone number</h5>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input
                        type="password"
                        placeholder="At least 6 characters"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        minLength={8}
                    />
                    <button className="auth_btn" type="submit">Continue</button>
                    <span>By continuing, you agree to Amazon's <a href="##"> Conditions of Use and Privacy Notice.</a></span>
                    <a href="##"><AiFillCaretRight /> Need help?</a>
                </div>
            </form>
            <button onClick={signInwithGoogle} className="google_btn"> <FcGoogle /> Sign in with Google</button>

            <div className="btn_container">
                <input type="text"
                    placeholder="Enter your phone number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)} />
                <button onClick={verifyThePhone}>Verify</button>
            </div>
                <div id="recaptcha-container"></div>
            <div className="new_amazon">
                <div className="line"></div>
                <span>New to Amazon?</span>
                <div className="line"></div>
            </div>
            <Link to="/account">
                <button className='create_acc_btn'>Create your Amazon account</button>
            </Link>
            <div className="login_copyright">
                <div className="login_help">
                    <a href="##">Conditin of Use</a>
                    <a href="##">Privacy Notice</a>
                    <a href="##">Help</a>
                </div>
                <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
    )
}

export default Login
