import type { User } from "firebase/auth"
import { firebaseConfig } from "./fb"

export const getProfile = async (token: string) => {
    return fetch(`https://people.googleapis.com/v1/people/me?personFields=${encodeURIComponent('names,nicknames,birthdays,genders')}&sources=READ_SOURCE_TYPE_PROFILE&key=${firebaseConfig.apiKey}`, {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }).then(res => res.json());
}