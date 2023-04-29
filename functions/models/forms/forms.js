/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
const { functions, cors, fastify, requestHandler } = require("../application/lib");
const { addForm } = require("../forms/tark/addForm");
const { addResponse } = require("../forms/tark/addResponse");
const { getForm } = require("./tark/getForm");
const { getUserForms } = require("../forms/tark/getUserForms");
const { getFormResponses } = require("../forms/tark/getFormResponses");


/**
 * Description
 * @param {any} "/addForm"
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
fastify.post("/addForm", (req, res) => {
  addForm(req, res);
});

/**
 * Description
 * @param {any} "/addResponse"
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
fastify.post("/addResponse", (req, res) => {
  addResponse(req, res);
});

/**
 * Description
 * @param {any} "/getForm"
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
fastify.post("/getForm", (req, res) => {
  getForm(req, res);
});

/**
 * Description
 * @param {any} "/getUserForms"
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
fastify.post("/getUserForms", (req, res) => {
  getUserForms(req, res);
});

/**
 * Description
 * @param {any} "/getFormResponses"
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
fastify.post("/getFormResponses", (req, res) => {
  getFormResponses(req, res);
});

/**
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.forms = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    fastify.ready((err) => {
      if (err) throw err;
      requestHandler(req, res);
    });
  });
});