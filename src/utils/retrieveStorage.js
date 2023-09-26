import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "./firebase";

export async function retrieveStorage(fileName) {
  try {
    const url = await getDownloadURL(ref(storage, fileName));
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    return objectURL;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
