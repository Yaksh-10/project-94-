function addUser()
{
    user_name = document.getElementById('user_name').value;
    localStorage.setItem('user_name' , user_name);
    window.location = 'zwitter_room.html';
}
var firebaseConfig = {
    apiKey: "AIzaSyCvskkZMi6kHRmyLFPDVNJybsdYaQGjXxM",
    authDomain: "zwitter-46540.firebaseapp.com",
    databaseURL: "https://zwitter-46540-default-rtdb.firebaseio.com",
    projectId: "zwitter-46540",
    storageBucket: "zwitter-46540.appspot.com",
    messagingSenderId: "85507077095",
    appId: "1:85507077095:web:8bcdf6f91449642b794342",
    measurementId: "G-NC36VY91TX"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
