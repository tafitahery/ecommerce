const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Connexion to MongoDB successfully'))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running on port 5000');
});
