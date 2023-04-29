/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */

const { getForm } = require("../lib");


exports.getForm = function(request, response) {
  const id = request.body.data.Id;

  let status = 200;
  let result;

  getForm(id).then((data) => {
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