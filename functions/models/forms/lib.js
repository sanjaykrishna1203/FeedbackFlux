/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */

const { db } = require("../application/lib");

exports.addForm = function(uid, title, id, fields) {
  const promise = db.collection("Forms").doc(id).set({
    UserUid: uid,
    Title: title,
    Id: id,
    Fields: fields,
    CreatedAt: new Date(),
  });
  return Promise.resolve(promise);
};

exports.addResponse = function(title, id, fields) {
  const promise = db.collection("Forms").doc(id).collection("Responses").add({
    Title: title,
    Id: id,
    Fields: fields,
    CreatedAt: new Date(),
  });
  return Promise.resolve(promise);
};

exports.getForm = function(id) {
  const promise = db.collection("Forms").doc(id).get().then((doc)=>{
    if (doc.exists) return doc.data();
  });
  return Promise.resolve(promise);
};

exports.getUserForms = function(uid) {
  const promise = db.collection("Forms").where("UserUid", "==", uid).get().then((doc)=>{
    const data = [];
    doc.forEach((element) => {
      const x = element.data();
      x.CreatedAt = x.CreatedAt.toDate();
      if (element.exists) data.push(x);
    });
    return data;
  });
  return Promise.resolve(promise);
};

exports.getFormResponses = function(id) {
  const promise = db.collection("Forms").doc(id).collection("Responses").get().then((doc)=>{
    const data = [];
    doc.forEach((element) => {
      if (element.exists) data.push(element.data());
    });
    return data;
  });
  return Promise.resolve(promise);
};