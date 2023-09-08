import React, { useState } from "react";
import "./Signup.css";
import {
  createUserWithEmailAndPassword
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { setLoading } from "../features/userSlice";

function Signup() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();
    dispatch(setLoading(true));
    await createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <div className="signup">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="email"
        placeholder="Username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>
    </div>
  );
}

export default Signup;
