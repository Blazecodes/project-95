var firebaseConfig = {
    apiKey: "AIzaSyDgRTAwxPfN2iuGKZLfxpgNbfkuBh2_RRk",
    authDomain: "kwittertheripofversionoftwiter.firebaseapp.com",
    databaseURL: "https://kwittertheripofversionoftwiter-default-rtdb.firebaseio.com",
    projectId: "kwittertheripofversionoftwiter",
    storageBucket: "kwittertheripofversionoftwiter.appspot.com",
    messagingSenderId: "424719536255",
    appId: "1:424719536255:web:f36f53704d27b1e53b2f4a"
  };

   firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name")
   console.log(user_name);

   room_name=localStorage.getItem("room_name")
   console.log(room_name);

   function send () {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name
        message:msg
        like:0
    });
    document.getElementById("msg").value="";
   };

   function logout () {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "index.html";
};