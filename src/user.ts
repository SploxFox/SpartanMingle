import { writable } from "svelte/store"
import type { auth } from "./fb"

export interface ClientData {
    fbUser: 'pending' | typeof auth.currentUser
}

export const user = writable<ClientData>({
    fbUser: 'pending'
});