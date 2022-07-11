import { useEffect, useState } from "react";
import "./Login.css";
import "./Toogle.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import "./Firebase.js";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  const authentication = getAuth();

  useEffect(() => {
    onAuthStateChanged(authentication, (currentUser) => {
      setUser(currentUser);
    });
  }, [authentication]);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        authentication,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(authentication);
  };
  return (
    <div className="form">
      <div className="form-toggle"></div>
      <div className="form-panel one">
        <div className="form-header">
          <h1>Account Login</h1>
        </div>
        <div className="form-content">
          <form>
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input
                type="email"
                id="#email"
                name="email"
                required="required"
                onChange={(event) => {
                  event.preventDefault();
                  setLoginEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="#password"
                name="password"
                required="required"
                onChange={(event) => {
                  event.preventDefault();
                  setLoginPassword(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label className="form-remember">
                <input type="checkbox" />
                Remember Me
              </label>
              <a className="form-recovery" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
          <div className="form-group">
            <button onClick={login} style={{ marginBottom: "5px" }}>
              Log In
            </button>
            <h4> User Logged In: {user?.email}</h4>
          </div>
        </div>
      </div>
      <div className="form-panel two">
        <div className="form-header">
          <h1>Register Account</h1>
        </div>
        <div className="form-content">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required="required" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required="required"
              />
            </div>

            <div className="form-group">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
