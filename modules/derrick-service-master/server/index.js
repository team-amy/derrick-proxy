const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('../database/index.js');
const PORT = 3003;

app.use('/', express.static(__dirname + '/../client/dist'))
app.use('/:id', express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/api/users/:id', (req, res) => {
  let id = req.params.id;
  User.getUser(id, (err, user) => {
    if(err) {
      console.log(err);
    } else {
      res.json(user);
    }
  });
});

app.get('/support/:id', (req, res) => {
  let albumId = req.params.id;

  User.getUsersForAlbum(albumId, (err, albumUsers) => {
    if (err) {
      console.log(err);
    } else {
      res.json(albumUsers);
    }
  });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
