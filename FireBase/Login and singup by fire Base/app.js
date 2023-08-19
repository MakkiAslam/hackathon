import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
    const firebaseConfig = {
    apiKey: "AIzaSyB7aH7xCpPc_6zuL5M0TgrjS3dQ0x-mji8",
    authDomain: "today-79c71.firebaseapp.com",
    projectId: "today-79c71",
    storageBucket: "today-79c71.appspot.com",
    messagingSenderId: "449655177118",
    appId: "1:449655177118:web:25a3055369880270abe08f"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  let username = document.getElementById("userName")
  let email  = document.getElementById("email")
  let password = document.getElementById("password")
  let button = document.getElementById("button")
button.addEventListener("click", ()=>{
let obj = {
  username:username.value,
  email:email.value,
  password:password.value
}
console.log(obj)
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user, "Succesful")
    alert("User Succefull registerd")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, "Error")

  });


})
