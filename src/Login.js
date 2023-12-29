import React from 'react'
import './Login.css'
import { auth } from './firebase';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const [profilepic, setProfilepic] = useState("")
    const dispatch  = useDispatch();

    const loginToApp = (e) => { 
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL
            }))
        })
        .catch(err => alert(err))

    };
    const register = () => {
        if (!name) {
            return alert("Please enter a full name")
        }
        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilepic
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name, 
                        photoURL: profilepic,
                    }))
                })
            }
        ).catch(err => alert(err))
     };
    return (
        <div className="Login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/437px-LinkedIn_Logo.svg.png?20170711102837" alt="" />
            <form action="submit">
                <input placeholder="Full Name (required if registering)" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <input placeholder="Profile pic URL (optional)" type="text"  value={profilepic} onChange={(e) => setProfilepic(e.target.value)}/>
                <input placeholder="elonmusk@gmail.com" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member? <span className='click__register' onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login