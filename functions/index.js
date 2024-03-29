const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./key.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: functions.config().admin.db_url,
});

const db = admin.database();

exports.createUser = functions.auth.user().onCreate(async (user) => {
  const {uid, email, displayName, photoURL} = user;
  const u = {
    email,
    displayName,
    photoURL,
    createdAt: new Date(),
  };
  db.ref("users").child(uid).set(u);
});

exports.deleteUser = functions.auth.user().onDelete(async (user) => {
  const {uid} = user;
  db.ref("users").child(uid).remove();
});
exports.test = functions.https.onRequest(require("./test"));
