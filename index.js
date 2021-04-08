const express = require('express')
const bodyParser = require('body-parser')
const webpush = require('web-push')
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json())

const publicVapidKey = 'BB88mDBASFxSSZTpynOytHS2geC81QlQh7FJD3DOL6y_6oXt2Pdy5fRBhgUw5nb77Lk5EZHX3rGZ0IKI3o3WdGk';

const privateVapidKey = '0UdEBORcTjZV3hXEUoggycnl-IfXjd0gL_QtXT6_7SQ'

webpush.setVapidDetails(
    "mailto:shinminah357159@gmail.com",
    publicVapidKey,
    privateVapidKey
  );
  
  // Subscribe Route
  app.post("/subscribe", (req, res) => {
    // Get pushSubscription object
    const {subscription, title}  = req.body;
  
    // Send 201 - resource created
    res.status(201).json({});
  
    // Create payload
    const payload = JSON.stringify({ title: `Welcome back ${title}` });
  
    // Pass object into sendNotification
    webpush
      .sendNotification(subscription, payload)
      .catch(err => console.error(err));
  });
  
  const port =  process.env.PORT || 8000;
  
  app.listen(port, () => console.log(`Server started on port ${port}`));