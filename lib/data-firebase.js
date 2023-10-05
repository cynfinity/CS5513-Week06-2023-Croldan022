import app from "./firebase-app";
import { gerFirestore, collection, getDocs, doc, getDoc} from "firebase/firestore";

const db =getFirestore(app);