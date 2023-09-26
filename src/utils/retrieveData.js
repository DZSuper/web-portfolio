import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function retrieveData(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
}
