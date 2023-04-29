/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */


const { db } = require("../application/lib");

exports.setUser = function(uid, name, email, photoUrl) {
  const promise = db.collection("Users").doc(uid).set({
    Uid: uid,
    Email: email,
    Name: name,
    PhotoUrl: photoUrl,
  });
  return Promise.resolve(promise);
};


exports.getUser = function(uid) {
  const promise = db.collection("Users").doc(uid).get().then((doc)=>{
    const data = doc.data();
    return data;
  });
  return Promise.resolve(promise);
};