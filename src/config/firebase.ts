export const admin = require("firebase-admin");
var serviceAccount = require("/etc/secrets/firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL : 'https://firefly-sih-default-rtdb.firebaseio.com/'
});



