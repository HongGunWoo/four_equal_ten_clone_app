import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyB1XDWPwO7YjDkM4kSO5T8XhzGpoUmjxrI",
	authDomain: "four-equal-ten-clone-17f63.firebaseapp.com",
	projectId: "four-equal-ten-clone-17f63",
	storageBucket: "four-equal-ten-clone-17f63.appspot.com",
	messagingSenderId: "883069760524",
	appId: "1:883069760524:web:38e0f0621d873a6581aa29",
	measurementId: "G-48BW37JG1S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };