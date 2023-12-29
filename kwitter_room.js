var firebaseConfig = {

  apiKey: "AIzaSyAozwWFHmCO_pL2XC1aElu-TtU4T62akdY",
  authDomain: "lets-chat-web-app-4146a.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-4146a-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-4146a",
  storageBucket: "lets-chat-web-app-4146a.appspot.com",
  messagingSenderId: "575999102317",
  appId: "1:575999102317:web:fd3c70e95a39ed2fcf1e64",
  measurementId: "G-2PC4WMXT8B"
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
     console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
});});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";

}

function logout()
{
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "index.html";
}


  