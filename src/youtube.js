// function loadClient() {
//   gapi.client.setApiKey("AIzaSyDkm8oKo8mwiUbh9piWN520x6vRs4ZZTFg");
//   return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//       .then(function() { console.log("GAPI client loaded for API"); },
//             function(err) { console.error("Error loading GAPI client for API", err); });
// }
// 
// function execute() {
//   return gapi.client.youtube.channels.list({
//     "part": [
//       "snippet,contentDetails,statistics"
//     ],
//     "id": [
//       "UCfvrGahWpHn5bIPDsnvEKyw",
//       "UC5q9nH1LOB5nj1TBrIvV_JQ"
//     ]
//   })
//       .then(function(response) {
//               console.log("Response", response);
//             },
//             function(err) { console.error("Execute error", err); });
// }
// 
// gapi.load("client");

function LoadYoutubeClient() {
  gapi.client.setApiKey(YOUTUBE_API_KEY);
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest");
}

function LoadChannelFromID(channel_id) {
}

function LoadVideoFromID(video_id) {
}

gapi.load("client");
LoadYoutubeClient();