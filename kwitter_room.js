var firebaseConfig = {
  apiKey: "AIzaSyDBdGnABIz7I_via8AvodSfXmYW2NS0OKM",
  authDomain: "lets-chat-web-app-764e5.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-764e5-default-rtdb.firebaseio.com/",
  projectId: "lets-chat-web-app-764e5",
  storageBucket: "lets-chat-web-app-764e5.appspot.com",
  messagingSenderId: "570173575054",
  appId: "1:570173575054:web:0b54a29ab0cb0a5de35edf"
  };
  
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

   function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
     
    localStorage.setItem("room_name" , room_name);

    window.location = "kwitter_page.html";
  }

  function getData() 
  {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
//Start code
     console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

//End code
});});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";

}


  