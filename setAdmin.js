const admin = require("firebase-admin");

// Load your service account key
const serviceAccount = require("./firebase-admin-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function makeAdmin() {
  const uid = "ugUTsAnwnsMzQf6oB63OtvUpxPH2"; // <-- replace this

  await admin.auth().setCustomUserClaims(uid, {
    admin: true,
  });

  console.log("User is now an admin");
}

makeAdmin().catch(console.error);