import { FirebaseApp, getApp, initializeApp } from "firebase/app";
import {
  getFirestore,
  Firestore,
  addDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVpA1suyMCLWmJ9dwVCRBVxjtKQB22HUY",
  authDomain: "my-article-44313.firebaseapp.com",
  projectId: "my-article-44313",
  storageBucket: "my-article-44313.appspot.com",
  messagingSenderId: "725663048577",
  appId: "1:725663048577:web:540da29f9130570c63fe80",
};

export let app: FirebaseApp;

try {
  app = getApp("app");
} catch (e) {
  app = initializeApp(firebaseConfig, "app");
}

export const db = getFirestore(app);

export class Database {
  constructor(db: Firestore) {
    this.db = db;
  }
  private readonly db: Firestore;

  async addData<T extends object>(collections: string, createData: T) {
    return addDoc(collection(this.db, collections), createData);
  }

  async getData(collections: string, key: string, value: string) {
    const querySnapshot = await getDocs(
      query(collection(db, collections), where(key, "==", value))
    );

    let result: any = [];
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });

    return result;
  }
}
