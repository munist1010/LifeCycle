import firebase from 'firebase/app';
import 'firebase/auth';

// Reference to the Firebase authentication service
const auth = firebase.auth();

// Get references to the sign-up and login forms
const signupForm = document.querySelector('#signup-form');
const loginForm = document.querySelector('#login-form');

// Add event listener to sign-up form to handle form submissions
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed up
      const user = userCredential.user;
      console.log(`User signed up: ${user.email}`);
    })
    .catch((error) => {
      // Error occurred
      console.log(error);
    });
});

// Add event listener to login form to handle form submissions
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm['signin-email'].value;
  const password = loginForm['signin-password'].value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User logged in
      const user = userCredential.user;
      console.log(`User logged in: ${user.email}`);
    })
    .catch((error) => {
      // Error occurred
      console.log(error);
    });
});

// Sign out current user
auth.signOut()
  .then(() => {
    console.log(`User signed out`);
  })
  .catch(error => {
    console.error(error);
  });


  /* 
  
  This code helps people to sign in and out of a website using Firebase. 
  The code has 3 main parts: 

  - The first part is where we set up the connection to Firebase i.e. const auth = firebase.auth();
  - The second part is for someone who wants to sign up by providing their email and password, we let them know they have signed up.
  - The third part is where we help someone sign into their existing account using their email and password
  - The final part is where we help someone sign out of their currently logged-in account

  */