








// WOW ANIMATION
new WOW({ mobile: false }).init();

$("#dropdownMenuButton").click(() => {
  $(".dropdown-menu").slideToggle();
});



$(window).scroll(function(){
  var sc =  $(window).scrollTop()
   if(sc>0){
    $(".heading").slideUp(300)
   console.log("welcome back")

   }  
   else {
            $(".heading").slideDown(300)

         }
 })




  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDz8gtwLHf939Rj9XzXGz6yV8o3B36GaqI",
    authDomain: "etisalat-app1.firebaseapp.com",
    projectId: "etisalat-app1",
    storageBucket: "etisalat-app1.appspot.com",
    messagingSenderId: "629452538227",
    appId: "1:629452538227:web:176d7c0777cbfa4f600506",
    measurementId: "G-W3ZR8C0PE6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

