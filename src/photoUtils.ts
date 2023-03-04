import type { Photo } from "./types";

export const getPhotoUrl = (uid: string, photo: Photo) =>
        `https://storage.googleapis.com/spartan-mingle.appspot.com/userImages/${uid}/${photo.hash}.jpeg`;
