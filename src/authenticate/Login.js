import { signInWithEmailAndPassword , signInWithPopup} from "firebase/auth";
import React, { useState } from "react";
import { auth, googleprovider } from "../firebase";
import { useDispatch } from "react-redux";
import "./Login.css";
import { setLoading } from "../features/userSlice";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(setLoading(true));
    signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignin = () => {
    dispatch(setLoading(true));
    signInWithPopup(auth, googleprovider);
  };
  return (
    <div className="login">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleLogin}>Log in</button>
      <button onClick={googleSignin}>Sign in with google</button>
    </div>
  );
}

export default Login;
