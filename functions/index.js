const admin = require("firebase-admin");
admin.initializeApp();

const {users} = require("./models/users/users");
const {forms} = require("./models/forms/forms");
const {functions, db} = require("./models/application/lib");

exports.users = users;
exports.forms = forms;
exports.createUser = functions.firestore
    .document("Forms/{formId}/Responses/{responeId}")
    .onCreate(async (snap, context) => {
      const data = snap.data().Fields;
      const formId = context.params.formId;
      const responseId = context.params.responeId;
      const p = new Promise((res, rej)=>{
        for (let i = 0; i< data.length; i++) {
          if (data[i].type == "Open") {
            const myPromise = new Promise((myResolve, myReject) => {
              quickstart(data[i].response).then((d)=>{
                myResolve(d);
              });
            });
            myPromise.then((d)=>{
              data[i].Score = d.documentSentiment.score;
              if (data[i].Score >= 0.25 && data[i].Score <= 1.0) {
                data[i].Sentiment = "Positive";
              } else if (data[i].Score <= -0.25 && data[i].Score >= -1.0) {
                data[i].Sentiment = "Negative";
              } else {
                data[i].Sentiment = "Neutral";
              }
              // eslint-disable-next-line max-len
              console.log(data[i].Sentiment, "Sentiment for ", data[i].response);
              res();
            });
          }
        }
      });

      p.then(()=>{
        console.log(data, "For updataing");
        return db.collection("Forms").doc(formId).collection("Responses")
            .doc(responseId).update({
              Fields: data,
            });
      });
    });


// eslint-disable-next-line require-jsdoc
async function quickstart(text) {
  const myPromise = new Promise((myResolve, myReject) => {
    const request = require("request");
    const options = {
      "method": "POST",
      "url": "https://language.googleapis.com/v1beta2/documents:analyzeSentiment?key=<Your api key here>",
      "headers": {
      // eslint-disable-next-line max-len
        "Authorization": "<your oauth key here>",
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      "body": JSON.stringify({
        "document": {
          "content": text,
          "type": "PLAIN_TEXT",
        },
      }),

    };
    request(options, (error, response) => {
      if (error) throw new Error(error);
      myResolve(response.body);
    });
  });
  return myPromise.then((data)=>{
    return JSON.parse(data);
  });
}
