
var firebaseConfig = {
      apiKey: "AIzaSyBY4g_hU7HpN_1TfsXl7wpN2GiXIpgb3fg",
      authDomain: "project-94-e1052.firebaseapp.com",
      projectId: "project-94-e1052",
      storageBucket: "project-94-e1052.appspot.com",
      messagingSenderId: "659901721957",
      appId: "1:659901721957:web:3333a6e334e835f028058c"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
