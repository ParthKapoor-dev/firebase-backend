import admin from "firebase-admin"
var serviceAccount = require("/etc/secrets/firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL : process.env.FIREBASE_DB_URL
});

export default admin;

