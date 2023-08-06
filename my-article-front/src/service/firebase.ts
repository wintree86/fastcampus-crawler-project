import { FirebaseApp, getApp, initializeApp } from "firebase/app";
import {
  getFirestore,
  Firestore,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
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

  async setData<T extends object>(collections: string, key: string, value: T) {
    return setDoc(doc(this.db, collections, key), value);
  }

  async getData(collections: string, key: string, value: string) {
    const querySnapshot = await getDocs(
      query(collection(this.db, collections), where(key, "==", value))
    );

    let result: any = [];
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });

    return result;
  }

  async getAllData(collections: string) {
    const querySnapshot = await getDocs(collection(this.db, collections));

    let result: any = [];
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });

    return result;
  }
}
