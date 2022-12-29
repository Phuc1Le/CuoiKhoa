function myFunction() {
    location.href = "http://127.0.0.1:5500/D%E1%BB%B1%20%C3%A1n%20cu%E1%BB%91i%20kh%C3%B3a/index.html#";
}
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBVmvbDe-Q-s-wKiy9XvxHi2L1VhUEpV8E",
      authDomain: "endcourse-f1cdb.firebaseapp.com",
      databaseURL: "https://endcourse-f1cdb-default-rtdb.firebaseio.com",
      projectId: "endcourse-f1cdb",
      storageBucket: "endcourse-f1cdb.appspot.com",
      messagingSenderId: "61361328786",
      appId: "1:61361328786:web:942ea83853e4739b110c4b",
      measurementId: "G-H6DW0YP696"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
var ref = new Firebase("https://radiant-torch-3037.firebaseio.com/");
function timeStamp() {
    var now = new Date();
    var date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
    var time = [now.getHours(), now.getMinutes()];
    var suffix = (time[0] < 12) ? "AM" : "PM";
    time[0] = (time[0] < 12) ? time[0] : time[0] - 12;
    for (var i = 1; i < 3; i++){
        if (time[i] < 10) {
            time[i] = "0" + time[i];
        }
    }
    return date.join("/") + ", " + time.join(":") + " " + suffix;
}
function postComment() {
    var name = document.getElementById("name").value,
    comment = document.getElementById("comment").value,
    time = timeStamp();
    if (name && comment) {
        ref.push({
            name: name,
            comment: comment,
            time: time
        });
    }
    document.getElementById("name").value = '';
    document.getElementById("comment").value = '';
}
ref.on("child_added", function(snapshot) {
    var comment = snapshot.val();
    addComment(comment.name, comment.comment, comment.time);
});
function addComment(name, comment, timeStamp) {
    var comments = document.getElementById("comments");
    comments.innerHTML = "<hr><h4>" + name + " says<span>" + timeStamp + "</span></h4><p>" + comment + "</p>" + comments.innerHTML;
}