/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */

const { getUserForms } = require("../lib");


exports.getUserForms = function(request, response) {
  const uid = request.body.data.Uid;
  let status = 200;
  let result;

  getUserForms(uid).then((data) => {
    if (data) {
      result = { data: {status: "OK", resultData: data} };
      return response.status(status).send(result);
    }
  }).catch((error) => {
    status = 500;
    result = { data: error };
    console.error("Error Getting Form Data", error);
    return response.status(status).send(result);
  });
};