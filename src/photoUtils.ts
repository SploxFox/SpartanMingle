import type { Photo } from "./types";

export const getPhotoUrl = (uid: string, id: string) =>
        `https://storage.googleapis.com/spartan-mingle.appspot.com/userImages/${uid}/${id}`;
