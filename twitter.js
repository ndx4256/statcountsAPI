const express = require("express");
const app = express();
var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: 'DAutNIgdWFEp70XGmwMGQHEhi',
  consumer_secret: '5it5fVO8Cw6ba1aBwJoizRhVegh5vcRW5W8c4zOBE4t1QI15L0',
  bearer_token: 'AAAAAAAAAAAAAAAAAAAAAO2UFwEAAAAABbDSDR7Aa1qcgNT4GwYcq5CA19o%3DiVnlvKjg0AnNP1nbUkKsmSGjKJoZItpfyyuC7bhdI92AfflBlv'
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