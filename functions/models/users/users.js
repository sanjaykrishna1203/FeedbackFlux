/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
const { functions, cors, fastify, requestHandler } = require("../application/lib");
const { createNewUser } = require("../users/tark/createNewUser");


/**
 * Description
 * @param {any} "/createNewUser"
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
fastify.post("/createNewUser", (req, res) => {
  createNewUser(req, res);
});

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.users = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    fastify.ready((err) => {
      if (err) throw err;
      requestHandler(req, res);
    });
  });
});
