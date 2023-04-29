/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable max-len */

const admin = require("firebase-admin");
const firestore = admin.firestore();

/**
 * Description
 * @param {any} "firebase-functions"
 * @returns {any}
 */
const functions = require("firebase-functions");
/**
 * Description
 * @param {any} "cors"
 * @returns {any}
 */
const cors = require("cors")({origin: true});

const http = require("http");
let requestHandler = null;

/**
 * Description
 * @param {any} "fastify"
 * @returns {any}
 */
const fastify = require("fastify")({
  logger: false,
  serverFactory: (handler) => {
    requestHandler = handler;
    return http.createServer();
  },
});

/**
 * Description
 * @param {any} "application/json"
 * @param {any} {}
 * @param {any} req
 * @param {any} body
 * @param {any} done
 * @returns {any}
 */
fastify.addContentTypeParser("application/json", {}, (req, body, done) => {
  done(null, body.body);
});

exports.requestHandler = requestHandler;
exports.fastify = fastify;

exports.db = firestore;
exports.functions = functions.region("us-central1");
exports.cors = cors;
