import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../services/firebase";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe;
    };
  }, []);

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    console.log("Successfully signed up with " + email);
    setDoc(doc(db, "users", email), {
      favShows: [],
    });
  }
  function logIn(email, password) {
    signInWithEmailAndPassword(auth, email, password);
    console.log("Successfully logged up with " + email);
  }
  function logOut(email, password) {
    signOut(auth, email, password);
  }

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
