import { useEffect, useState } from "react";
import {
    getAuth, createUserWithEmailAndPassword,
    GoogleAuthProvider, signInWithEmailAndPassword,
    onAuthStateChanged, signOut, signInWithPopup,
    updateProfile, getIdToken
} from "firebase/auth";
import initializeFirebase from "../Pages/LoginAndRegistration/Firebase/firebase.init";
// initialize Firebase App
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoding] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password, name, history) => {
        setIsLoding(true);
        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                //save user to database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoding(false));
    }
    // Login User

    const loginUser = (email, password, location, history) => {
        setIsLoding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoding(false));
    }
    //Google Sign In
    const signInWithGogle = (location, history) => {
        setIsLoding(true);

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = result.user;
                //save user to database
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                // ...
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoding(false));
    }
    // observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoding(false);
        });
        return () => unsubscribe;
    }, [])
    const logOut = () => {
        setIsLoding(true);

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoding(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://nameless-inlet-63373.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    useEffect(() => {
        fetch(`https://nameless-inlet-63373.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
    return {
        user,
        isLoading,
        authError,
        admin,
        token,
        registerUser,
        signInWithGogle,
        loginUser,
        logOut,

    }
}
export default useFirebase;