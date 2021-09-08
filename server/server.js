var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;

app.listen(port);

// app.all('*', function (req, res) {
//   res.header("Access-Control-Allow-Origin", "*");
// res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
// res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/api/squads', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send({
    squads: [
      {
        id: 1,
        name: "Justice League",
        EngagementPercentage: 64,
        members: [
          {
            name: "Diana Prince",
            moodPercentage: 99,
          },
          {
            name: "Clark Kent",
            moodPercentage: 88,
          },
          {
            name: "Bruce Wayne",
            moodPercentage: 99,
          },
        ],
      },
      {
        id: 2,
        name: "Suicide Squad",
        EngagementPercentage: 10,
        members: [
          {
            name: "Harley Quinn",
            moodPercentage: 20,
          },
          {
            name: "Bloodsport",
            moodPercentage: 10,
          },
          {
            name: "Peacemaker",
            moodPercentage: 8,
          },
        ],
      },
      {
        id: 3,
        name: "The Avengers",
        EngagementPercentage: 60,
        members: [
          {
            name: "Tony Stark",
            moodPercentage: 31,
            // moodPercentage: 61,
          },
          {
            name: "Bruce Banner",
            moodPercentage: 62,
          },
          {
            name: "Peter Parker",
            moodPercentage: 63,
          },
        ],
      },
      {
        id: 4,
        name: "The Avengers",
        EngagementPercentage: 60,
        members: [
          {
            name: "Tony Stark",
            moodPercentage: 31,
            // moodPercentage: 61,
          },
          {
            name: "Bruce Banner",
            moodPercentage: 62,
          },
          {
            name: "Peter Parker",
            moodPercentage: 63,
          },
        ],
      },
    ],
  })
})

console.log('todo list RESTful API server started on: ' + port);