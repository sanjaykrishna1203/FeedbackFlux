/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */

const { getUser, setUser } = require("../lib");

exports.createNewUser = function(request, response) {
  const uid = request.body.data.uid;
  const email = request.body.data.email;
  const displayName = request.body.data.name;
  const photoURL = request.body.data.photoURL;
  let status = 200;
  const promise1 = getUser(uid).then((data)=>{
    if (data == undefined) {
      setUser(uid, displayName, email, photoURL);
    }
  }).catch((err)=>{
    status = 500;
    console.log("Error", err);
  });
  let result;
  return Promise.resolve(promise1).then(()=>{
    result = { data: "User Logged In Successfully" };
    console.log("User Logged In Successfully");
    return response.status(status).send(result);
  }) .catch((error) => {
    result = { data: error };
    console.error("Error LogIn/SignUp User", error);
    return response.status(status).send(result);
  });
};
