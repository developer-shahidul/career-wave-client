import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import auth from "../Firebase/firebase.init";
import { useEffect, useState } from "react";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("auth state:", currentUser);
      if (currentUser?.email) {
        const userData = { email: currentUser.email };

        //  jwt secore
        axios
          .post("https://career-wave-server-sigma.vercel.app/jwt", userData, {
            withCredentials: true,
          })
          .then((res) => {
            // console.log("jwt data", res.data);
            if (res.data.token) {
              localStorage.setItem("token", res.data.token);
            } else {
              console.log("token not found in response data");
            }
          })
          .catch((error) => console.error("JWT Error:", error));
      } else {
        localStorage.removeItem("token");
      }

      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    register,
    user,
    setUser,
    loading,
    signInUser,
    signOutUser,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
