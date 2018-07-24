const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let video = 'https://www.youtube.com/watch?v=_XyBa8QsVQU';
let platform = 'YouTube';
let chatName = "";

app.get('/api/sync', (req, res) => {
  res.send({
      video: video,
      platform: platform,
      seekStart: '',
      playing: false,
      chatName: chatName
    });
});

app.post('/api/add', (req, res) => {
    console.log(req.body["video-url"]);
    video = req.body["video-url"];
    findPlatform(video);
    res.redirect('/api/sync');
});

app.listen(port, () => console.log(`Listening on port ${port}`));

findPlatform = (url) => {
    if (url.includes("twitch")) {
        chatName = url.substring(url.lastIndexOf('/') + 1);
        platform = "Twitch";
    } else if (url.includes("rapidvideo")) {
        platform = "Anime";
    }
    else if (url.includes("youtube")){
        platform = "YouTube";
    } else {
        alert("Not valid URL");
        console.log("not valid url" + url);
    }
}

// changeVideo = (e) => {
//     e.preventDefault();
//     let url = this.refs.link.value;

//     if (url.includes("twitch")) {
//         let name = url.substring(url.lastIndexOf('/') + 1);
//         this.setState({
//             platform: "Twitch",
//             url: url,
//             chatName: name
//         });
//     } else if (url.includes("rapidvideo")) {
//         this.setState({
//             platform: "Anime",
//             url: url
//         });
//     }
//     else if (url.includes("youtube")){
//         this.setState({
//             platform: "YouTube",
//             url: url
//         });
//     } else {
//         alert("Not valid URL");
//     }
// }