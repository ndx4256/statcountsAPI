const express = require("express");
const app = express();
var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: 'lmaoyouthought',
  consumer_secret: 'lmaoyouthought',
  bearer_token: 'lmaoyouthought'
  });
app.get("/twitter/tweet/:id", (req, resp) => {
client.get(`statuses/show/${req.params.id}`, function(error, tweets, response) {
  console.log(tweets);
  resp.send(tweets)
});  
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
