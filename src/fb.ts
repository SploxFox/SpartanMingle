import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut as fbSignOut, deleteUser as authDeleteUser, type User } from "firebase/auth";
import { connectFunctionsEmulator, getFunctions, httpsCallable } from "firebase/functions";
import { DocumentReference, doc, getDoc, getFirestore, onSnapshot } from "firebase/firestore";
import { getStorage, ref as storageRef } from "firebase/storage";
import { type ReadyClientData, client } from "./client";
import type { Conversation, LikedDisliked, MatchVerdict, PrivateUserData, QueryProfileStackReq, SendMessage, UserData } from "./types";
import { get } from "svelte/store";
import { getProfile } from "./gpai";

export const firebaseConfig = {
    apiKey: "AIzaSyCJzyei15JLOlBt8UNMpeH45S0fT2sEhrI",
    authDomain: "spartan-mingle.firebaseapp.com",
    projectId: "spartan-mingle",
    storageBucket: "spartan-mingle.appspot.com",
    messagingSenderId: "65412408980",
    appId: "1:65412408980:web:dfa7b4a985e3a1e957f681",
    //measurementId: "G-NSCNW8Q2TL",
};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(fbApp);

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

let unsubPrivateData = () => {};

onAuthStateChanged(auth, async fbUser => {
    if (!fbUser) {
        client.set({
            ready: false,
            signedOut: true,
        });
        return;
    }

    client.set({
        ready: true,
        signedOut: false,
        privateData: (await getDoc(userPrivateDoc(fbUser.uid))).data() as PrivateUserData,
        uid: fbUser.uid,
        fbUser
    });

    unsubPrivateData();
    unsubPrivateData = onSnapshot(userPrivateDoc(fbUser.uid), snap => {
        client.update(prev => ({
            ...prev,
            privateData: snap.data() as PrivateUserData
        }));
    })
});

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

export const sendMessage = httpsCallable<SendMessage, void>(functions, 'sendMessage');

export const markAllAsRead = httpsCallable<void, void>(functions, 'markAllAsRead');

(window as any).queryProfileStack = queryProfileStack;

(window as any).createDummyUsers = httpsCallable(functions, 'createDummyUsers');

export const deleteUser = async () => {
    try {
        await signIn();
        if (confirm('Are you sure you want to delete your account? This cannot be undone.')) {
            const dialog = document.createElement('dialog');
            dialog.textContent = 'Deleting your account. Please keep the tab open';
            document.body.appendChild(dialog);
            dialog.showModal();
            await deleteUserFn();
            await authDeleteUser(auth.currentUser);
            dialog.close();
            alert('Your account has successfully been deleted.');
        }
    } catch (e) {
        alert('There was an error deleting your acount.');
    }
    
}

export const getReadyClient = () => new Promise<ReadyClientData>((res, rej) => {
    if (get(client).ready) {
        res(get(client) as ReadyClientData);
        return;
    }

    const svelteUnsub = client.subscribe(val => {
        if (val.ready) {
            res(val);
            svelteUnsub();
        }
    });
});

(window as any).getReadyClient = getReadyClient;

export const getClientData = async () => new Promise<UserData>(async (res, rej) => {
    const client = await getReadyClient();

    const userDoc = doc(fs, 'users', client.uid) as DocumentReference<UserData>;
    const unsub = onSnapshot(userDoc, snap => {
        if (snap.exists()) {
            res(snap.data());
            unsub();
        }
    });
});

(window as any).getClientData = getClientData;

export const userDoc = (uid: string) => {
    return doc(fs, 'users', uid);
}

export const getUserDoc = async (uid: string) => {
    return getDoc(userDoc(uid));
}

export const userPrivateDoc = (uid: string) => {
    return doc(fs, 'usersPrivate', uid);
}

export const getMessagesDoc = (from: string, to: string, subdoc: string) => {
    const [first, second] = [from, to].sort();

    return doc(fs, 'messages', first, second, subdoc) as DocumentReference<Conversation>;
}