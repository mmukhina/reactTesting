import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


let userInfo = {
  userName: 'Bob',
  auth: false,
};

let loadedPercents = 0;

app.get('/fetchUserName', (req, res) => {
  const userName = userInfo.userName;
  res.json({ userName });
});

app.post('/updateUserName', (req, res) => {
  const {newName} = req.body;
  userInfo.userName = newName;
});

app.get('/updateLoadingText', (req, res) => {
  loadedPercents += 10;
  if (loadedPercents > 100) {
    loadedPercents = 100;
    loadedPercents = 0;
  }
  res.json({ loadedPercents });
});

app.get('/fetchUserAuth', (req, res) => {
  const userAuth = userInfo.auth;
  res.json({ userAuth });
});


// Start the server
app.listen(PORT, () => {
  console.log('Server is running');
});
