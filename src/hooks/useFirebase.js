import initializeAuthentication from "../components/Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  //----- Log in with Google ------
  const handleUserGoogleLogIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //----- Register with Email Password-----
  const handleUserRegisterWithEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: userName,
        });
        setUser({
          ...result.user,
          displayName: userName,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Sign in With Email Password
  const handleUserSignInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  // Observe User State

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  // Sign Out
  const handleUserLogOut = () => {
    signOut(auth).then((result) => {
      setUser({});
    });
  };
  return {
    handleUserGoogleLogIn,
    handleUserSignInWithEmail,
    handleUserRegisterWithEmail,
    handleUserLogOut,
    setUserName,
    isLoading,
    user,
    error,
  };
};

export default useFirebase;
