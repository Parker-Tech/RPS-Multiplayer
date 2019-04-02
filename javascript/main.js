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

var database = firebase.database();

var roomCount = 0;

if(database.ref("roomCount") == null){
  roomCount = 0;
}else{
  roomCount = 5//database.ref("roomCount").val();
}

database.ref().on("value", function(snapshot) {
  $(".room-stage").html(snapshot.val().roomStage)
});


$("#add-room-btn").on("click", function(){
  console.log("working")
  roomCount++;
  var dynamicDiv = $("<div>").addClass("col-3 dynamic-div");
  var dynamicBtn = $("<button>").addClass("btn btn-dark room-btn").text("Join Room " + roomCount)
  dynamicDiv.html(dynamicBtn);
  $(".room-stage").append(dynamicDiv);

  database.ref("roomCount").set({
    roomCount: roomCount
  });
  
  database.ref("roomStageHtml").set({
    roomStage: $(".room-stage").html()
  })
});

$(document).on("click", ".room-btn", function(){
  //change the html to represent a "1v1" senario
  $(".room-stage").empty();
});