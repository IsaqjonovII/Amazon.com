import React, {useState} from 'react'
import './Login.css'
import { AiFillCaretRight } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { auth } from '../../firebase/firebase'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    const login = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(user => {
                if(user){
                    history.push("/")
                }
            })
            .catch(err => console.log(err))
    }
  
    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
            <form onSubmit={login}>
                <div className="sign_in">
                    <h1>Sign-In</h1>
                    <h5>Email or mobile phone number</h5>
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                     <input
              type="password"
              minLength="8"
              placeholder="At least 6 characters" onChange={e => setPassword(e.target.value)} value={password}
            />
                    <button>Continue</button>
                    <span>By continuing, you agree to Amazon's <a href="##"> Conditions of Use and Privacy Notice.</a></span>
                    <a href="##"><AiFillCaretRight/> Need help?</a>
                </div>
            </form>
            <div className="new_amazon">
                    <div className="line"></div>
                    <span>New to Amazon?</span>
                    <div className="line"></div>
                </div>
                <Link to="/account">
                   <button className='create_acc_btn'>Craete your Amazon account</button>
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
