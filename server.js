// const express = require('express');
// const app = express();
// var router = express.Router();

// var port = process.env.PORT || 8080
// var path = require('path');

// app.use(express.json());

// // app.use(express.static(path.resolve(__dirname, 'build')));

// app.get('/', (req, res) => {
//     //res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
//     console.log('hello');
// })

// app.get('/api/test', (req, res) => {
//     res.send([
//         {
//             getURL: "https://www.youtube.com/watch?v=i0p1bmr0EmE"
//         }
//     ]);
// });

// app.listen(port, () => {
//     console.log("app running");
// })

const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'https://www.youtube.com/watch?v=PQnFbMxfbMw' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));