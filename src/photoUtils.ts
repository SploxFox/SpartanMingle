import type { Photo } from "./types";

export const getPhotoUrl = (uid: string, slot: number) =>
        `https://storage.googleapis.com/spartan-mingle.appspot.com/userImages/${uid}/${slot}`;
