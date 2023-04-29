/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */

const { addResponse } = require("../lib");

exports.addResponse = function(request, response) {
  const fields = request.body.data.Fields;
  const id = request.body.data.Id;
  const title = request.body.data.Title;
  const status = 200;
  const promise = addResponse( title, id, fields).then(()=>{
  }).catch((err)=>{
    console.log(err);
  });
  let result = "";
  return Promise.resolve(promise).then(()=>{
    result = { data: id };
    console.log("Response Saved Successfully");
    return response.status(status).send(result);
  }) .catch((error) => {
    result = { data: error };
    console.error("Error, Cannot save Response", error);
    return response.status(status).send(result);
  });
};