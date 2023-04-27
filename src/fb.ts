import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut as fbSignOut, deleteUser as authDeleteUser } from "firebase/auth";
import { connectFunctionsEmulator, getFunctions, httpsCallable } from "firebase/functions";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getStorage, ref as storageRef } from "firebase/storage";
import { user } from "./user";
import type { LikedDisliked, MatchVerdict, QueryProfileStackReq, UserData } from "./types";
import { get } from "svelte/store";
import { getProfile } from "./gpai";

export const firebaseConfig = {
    apiKey: "AIzaSyCJzyei15JLOlBt8UNMpeH45S0fT2sEhrI",
    authDomain: "spartan-mingle.firebaseapp.com",
    projectId: "spartan-mingle",
    storageBucket: "spartan-mingle.appspot.com",
    messagingSenderId: "65412408980",
    appId: "1:65412408980:web:dfa7b4a985e3a1e957f681",
    measurementId: "G-NSCNW8Q2TL",
};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fbApp);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
provider.addScope('https://www.googleapis.com/auth/userinfo.email');
provider.addScope('https://www.googleapis.com/auth/user.gender.read');

provider.setCustomParameters({
    hd: 'case.edu'
})

export const auth = getAuth();
(window as any).auth = auth;

export let defaultName = '';

const functions = getFunctions(fbApp);
//connectFunctionsEmulator(functions, 'localhost', 5000);

const fs = getFirestore();

export const storage = getStorage();
export const userImageRef = (uid: string, id: string) => storageRef(storage, `userImages/${uid}/${id}`)

onAuthStateChanged(auth, fbUser => {
    user.set({
        fbUser
    });
})

export const signIn = () => {
    return signInWithPopup(auth, provider).then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const profile = await getProfile(token);
        defaultName = profile.names[0].givenName

        // The signed-in user info.
        const fbUser = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        alert('Error signing in. Please try again, and use your Case email.');

    });
}

export const signOut = () => {
    fbSignOut(auth);
}

export const updateUser = httpsCallable<Partial<UserData>, void>(functions, 'updateUser');

const deleteUserFn = httpsCallable(functions, 'deleteUser');

const queryProfileStackFn = httpsCallable<QueryProfileStackReq, UserData[]>(functions, 'queryProfileStack');

export const queryProfileStack = async (req: QueryProfileStackReq) => (await queryProfileStackFn(req)).data;

export const likeDislike = httpsCallable<LikedDisliked, MatchVerdict>(functions, 'likeDislike');

(window as any).queryProfileStack = queryProfileStack;

(window as any).createDummyUsers = httpsCallable(functions, 'createDummyUsers');

export const deleteUser = async () => {
    try {
        await signIn();
        await deleteUserFn();
        await authDeleteUser(auth.currentUser);
        alert('Your account has successfully been deleted.');
    } catch (e) {
        alert('There was an error deleting your acount.');
    }
    
}

export const getClientData= async () => {
    const usr = get(user).fbUser;
    if (typeof usr == "string") {
        return;
    }
    const userDoc = doc(fs, 'users', usr.uid);
    const snapshot = await getDoc(userDoc);
    return snapshot.exists() ? snapshot.data() : false;
}

export const getUserDoc = async (uid: string) => {
    const userDoc = doc(fs, 'users', uid);
    const snapshot = await getDoc(userDoc);
    return snapshot;
}