import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { addUser, removeUser } from '../Utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/Firebase';

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const user = useSelector(store => store.user)

    useEffect(() => {
        const unsubsribeAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              let {email, displayName, uid, photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
              navigate('/browse')
              // ...
            } else {
              // User is signed out
              navigate('/')
            }
          });
          return () => unsubsribeAuth()
    }, [])


    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser())
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className='absolute px-8 bg-gradient-to-b from-black w-full h-24 flex justify-between' >
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className='w-44'
      />
      {user && <div onClick={handleSignOut} className='text-red-600 mt-8 font-bold text-lg cursor-pointer'>
        Sign Out
      </div>}
    </div>
  );
}

export default Header