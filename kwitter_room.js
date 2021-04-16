
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAfvS2N9uYMvA6FPbsekgAK54O_MX2sDTI",
    authDomain: "emeralds-and-rubies-9502d.firebaseapp.com",
    databaseURL: "https://emeralds-and-rubies-9502d.firebaseio.com",
    projectId: "emeralds-and-rubies-9502d",
    storageBucket: "emeralds-and-rubies-9502d.appspot.com",
    messagingSenderId: "605418981728",
    appId: "1:605418981728:web:f1e4cead4dd675a8677605",
    measurementId: "G-NFQY6JBSW0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  username=localStorage.getItem("username")
  document.getElementById("username").innerHTML="Welcome "+username
function add_room(){
  room_name=document.getElementById("room_name").value

  firebase.database().ref("/").child(room_name).update()({
    purpose : "addingroomname"
  });
  localStorage.setItem("room_name",room_name)

  window.location="kwitter_page.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log(Room_names)
      row="<div class='room_name' id= "+Room_names+ "onclick='redirect_to_room_name(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      

      });});}
getData();
function redirect_to_room_name (name){
  console.log(name);
  localStorage.setItem("room_name",name)
window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("username")
  localStorage.removeItem("room_name")
  window.location="index.html"
}

