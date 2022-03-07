
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBpQxRPOOkAo9gb0pqFIoDjCKceBgWNU7Q",
    authDomain: "kwitter-6369e.firebaseapp.com",
    databaseURL: "https://kwitter-6369e-default-rtdb.firebaseio.com",
    projectId: "kwitter-6369e",
    storageBucket: "kwitter-6369e.appspot.com",
    messagingSenderId: "824792284288",
    appId: "1:824792284288:web:65a712ff45643dfe08fa65"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()    
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}                               