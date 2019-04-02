// Initialize Firebase
var config = {
  apiKey: "AIzaSyBVOKtkxCVlgKNpZpu9kPUztr6JUJEXXqk",
  authDomain: "rps-project-online.firebaseapp.com",
  databaseURL: "https://rps-project-online.firebaseio.com",
  projectId: "rps-project-online",
  storageBucket: "rps-project-online.appspot.com",
  messagingSenderId: "14469084525"
};
firebase.initializeApp(config);

var roomCount = 0;

$("#add-room-btn").on("click", function(){
  roomCount++;
  var dynamicDiv = $("<div>").addClass("col-3 dynamic-div");
  var dynamicBtn = $("<button>").addClass("btn btn-dark room-btn").text("Room " + roomCount)
  dynamicDiv.html(dynamicBtn);
  $(".room-stage").append(dynamicDiv);
});