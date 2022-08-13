import React,{ useState } from "react";
import "./Account.css";
import { auth } from "../../firebase/firebase";
import { AiFillCaretRight } from "react-icons/ai";
import { useHistory } from 'react-router-dom';

function Account() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('')


  const createAccount = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        if(user){
          history.push("/")
        }
      })
      .catch(err => setErr(err.message));
  }
  return (
    <div>
      <div className="account">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt=""
        />
        <form onSubmit={createAccount}>
          <div className="create_account">
            <h1>Create Account</h1>
            <h5>Mobile number or Email</h5>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <h5>Password</h5>
            <input
              type="password"
              placeholder="At least 6 characters"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={8}
            />
            <p className="password_notice">
              Passwords must be at least 6 characters.
            </p>
            <h5>Re-enter password</h5>
            <input type="password" />
            <button type="submit">Continue</button>
            <p>
              By creating an account, you agree to Amazon's Conditions of Use
              and Privacy Notice.
            </p>
            <div className="create_bottom">
              <p>
                Already have an account?{" "}
                <a href="##">
                  Sign-In <AiFillCaretRight />
                </a>
              </p>
              <p>
                Buying for work?{" "}
                <a href="##">
                  Create a free business account <AiFillCaretRight />
                </a>
              </p>
            </div>
          </div>
        </form>
        <div className="account_copyright">
          <div className="account_help">
            <a href="##">Conditin of Use</a>
            <a href="##">Privacy Notice</a>
            <a href="##">Help</a>
          </div>
          <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
}

export default Account;
