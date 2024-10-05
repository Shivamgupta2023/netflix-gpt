import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { toggleGptBtn } from "../Utils/GptSearchSlice";
import { App_logo } from "../Utils/constant";
import { SupportedLanguages } from "../Utils/LanguageConstants";
import { addLanguage } from "../Utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGPTSearchPage = useSelector(store => store.gpt?.gptToggleBtn)

  useEffect(() => {
    const unsubsribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        let { email, displayName, uid, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        navigate("/");
      }
    });
    return () => unsubsribeAuth();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptBtn = () => {
    dispatch(toggleGptBtn());
  };

  const handleLangSelect = (e) => {
    dispatch(addLanguage(e.target.value))
  }

  return (
    <div className="absolute z-10 px-8 bg-gradient-to-b from-black w-full h-24 flex justify-between">
      <img src={App_logo} alt="logo" className="w-44 z-10" />
      {user && (
        <div className="flex mt-8">
            {showGPTSearchPage && <select 
            className="p-1 bg-slate-500 text-white rounded-lg w-24 h-8"
            onChange={handleLangSelect}
            >
              {SupportedLanguages.map(itm => {
                return <option key={itm.key} value={itm.key}>{itm.value}</option>
              })}
            </select>}
          <button
            onClick={handleGptBtn}
            className="bg-slate-500 w-24 rounded-lg text-white h-8 mx-2"
          >
            {!showGPTSearchPage ? 'GPT Search':  'Homepage'}
          </button>
          <div
            onClick={handleSignOut}
            className="text-red-600 mx-2 font-bold text-lg cursor-pointer"
          >
            Sign Out
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
