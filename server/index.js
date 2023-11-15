const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const AccountModel = require ('./model/Account');

const app = express ();
app.use (express.json ());
app.use (cors ());

mongoose.connect ('mongodb+srv://meomeolachanai:gUWuCldSNFi6aB4h@cluster0.pf060s3.mongodb.net/NewsDatabase').then(() => console.log('DB Connected'));

app.post ('/login', (req, res) => {
  const {username, password} = req.body;
  AccountModel.findOne ({username: username})
    .then (account => {
      if (account) {
        if (account.password === password && account.username === username) {
          res.json (account);
          
          //res.json ('LogIn Successfully');
        } else {
          res.json ('Please enter a correct password!');
        }
      } else {
        res.json ('No record');
      }
    })
    .catch (err => console.log (err));
});

app.post ('/register', (req, res) => {
  AccountModel.create (req.body)
    .then (account => res.json (account))
    .catch (err => console.log (err));
});

app.get ('/user', (req, res) => {
  AccountModel.find ()
    .then (result => res.json (result))
    .catch (err => console.log (err));
});

app.listen (3001, () => console.log ('Listening.....'));
