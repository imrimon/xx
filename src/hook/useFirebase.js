import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import InitializeAuthentication from "../component/User/firebase/firebase.init";

InitializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();


    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { });
    }


    const signInUsingEmailPassword = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }


    // observed user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        signInUsingEmailPassword,
        registerNewUser
    }
}


export default useFirebase;