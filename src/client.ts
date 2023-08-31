import { writable } from "svelte/store"
import type { auth } from "./fb"
import type { User } from "firebase/auth";
import type { PrivateUserData } from "./types";

export type ReadyClientData = {
    ready: true,
    signedOut: false,
    uid: string,
    privateData: PrivateUserData,
    fbUser: User
}

export type ClientData = {
    ready: false,
    signedOut: boolean,
} | ReadyClientData;

export const client = writable<ClientData>({
    ready: false,
    signedOut: false,
});

client.subscribe(v => {
    (window as any).client = v;
});