const express = require("express");
const app = express();

var functions = require('./functions');

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("index");
})

app.get("/demo-question", (req, res) => {
  res.render("second", {
    selectedSmile: req.query.v,
    feedbackData: functions.createRandamizedFeedbacks()
  });
});

app.post("/thanks", (req, res) => {
  var data = req.body
  res.render("thanks", {
    firstRes: data.feedbackTitle_0,
    firstRating: data.rating_0,
    firstComment: data.comment_0,
    secRes: data.feedbackTitle_1,
    secRating: data.rating_1,
    secComment: data.comment_1,
    thirdRes: data.feedbackTitle_2,
    thirdRating: data.rating_2,
    thirdComment: data.comment_2,
    fourthRes: data.feedbackTitle_3,
    fourthRating: data.rating_3,
    fourthComment: data.comment_3,
    fifthRes: data.feedbackTitle_4,
    fifthRating: data.rating_4,
    fifthComment: data.comment_4,
    selecctedSmile: data.selectedSmile,
    additionalComment: data.additionalComment
  })

});

app.post("/index", (req, res) => {
  res.render("index");
});
