/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */

const { addForm } = require("../lib");

exports.addForm = function(request, response) {
  const fields = request.body.data.Fields;
  const uid = request.body.data.Uid;
  const title = request.body.data.Title;
  const id = "F" + Date.now();
  const status = 200;
  const date = new Date().toLocaleString();
  const promise = addForm(uid, title, id, fields, date).then(()=>{
  }).catch((err)=>{
    console.log(err);
  });
  let result = "";
  return Promise.resolve(promise).then(()=>{
    result = { data: id };
    console.log("Form Saved Successfully");
    return response.status(status).send(result);
  }) .catch((error) => {
    result = { data: error };
    console.error("Error, Cannot save form", error);
    return response.status(status).send(result);
  });
};