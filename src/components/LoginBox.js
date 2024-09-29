import React, { useRef, useState } from 'react'
import { checkErrorValidate } from '../Utils/CheckErrorValidator'
import { auth } from '../Utils/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';

const LoginBox = () => {

    const dispatch = useDispatch()

    const [toggleLogin, setToggleLogin] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const email = useRef(null)
    const password = useRef(null)
    const userName = useRef(null)

    const handleToggleLogin = () => {
        setToggleLogin(!toggleLogin)
    }

    const handleLoginBtn = () => {
      let emailValue = email.current.value;
      let passwordValue = password.current.value;
      let userNameValue = userName.current.value;
      let errorMessage = checkErrorValidate(emailValue, passwordValue);
      setErrorMessage(errorMessage);
      if (errorMessage) return;
      if (toggleLogin) {
        //Sign up
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
                displayName: userNameValue, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                // Profile updated!
                let {email, displayName, uid, photoURL} = auth.currentUser;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
              }).catch((error) => {
                // An error occurred
                setErrorMessage(error.message)
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + ' ' + errorMessage)
            // ..
          });
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + '-' + errorMessage)
          });
      }
    };

  return (
    <div className="absolute bg-black top-1/4 left-1/3 w-96 bg-opacity-75 rounded-xl">
      <form onSubmit={(e) => e.preventDefault()} className="mx-10 my-12">
        <h1 className="text-3xl text-white">
          {" "}
          {toggleLogin ? "Sign Up" : "Sign In"}
        </h1>
        {toggleLogin && (
          <input
            className="bg-white p-2 w-72 mt-4"
            type="text"
            placeholder="Username"
            ref={userName}
          ></input>
        )}
        <input
          className="bg-white p-2 w-72 mt-6 rounded-lg"
          type="text"
          placeholder="Email"
          ref={email}
        ></input>
        <input
          className="bg-white p-2 w-72 mt-6 rounded-lg"
          type="text"
          placeholder="Password"
          ref={password}
        ></input>
        {/* {toggleLogin && <input className='bg-white p-2 w-72 mt-6' type='text' placeholder='Verify password'></input>} */}
        {errorMessage && (
          <div className="text-red-600 font-bold my-2">{errorMessage}</div>
        )}
        <button
          onClick={handleLoginBtn}
          className="bg-red-600 font-red text-white w-72 p-2 rounded-lg mt-4"
        >
          {toggleLogin ? "Sign Up" : "Sign In"}
        </button>
        <h1
          onClick={handleToggleLogin}
          className="text-white my-2 cursor-pointer"
        >
          New to Netflix? Sign up now.
        </h1>
      </form>
    </div>
  );
}

export default LoginBox