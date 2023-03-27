<script>
  import { getDatabase, ref, set } from 'firebase/database';
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
  import app from '../firebase';
  // import { push } from 'svelte-routing';
  // import { navigate } from 'svelte-routing';



// async function signUp(formData) {
 
//   try {
   
//     // push('/nextPage'); // navigate to the NextPage component
//   } catch (error) {
//     // ...
//   }
// }


  const auth = getAuth(app);
  const db = getDatabase(app);

  let isSignIn = false;
  let user = null
  let message = '';

//   onAuthStateChanged(auth, (authUser) => {
//   user = authUser;
//   localStorage.setItem('user', JSON.stringify(user));
// });

  const toggleForm = () => {
    isSignIn = !isSignIn;
    message = '';
  };
//sign up function
  async function signUp(formData) {
    try {
      const { email, password } = formData;
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", user);
      message = 'Account created successfully!';
      // navigate('/nextPage');

    } catch (error) {
      console.error("Error creating user:", error);
      message = error.message;
    }
  }
//sign in function
  async function logIn(formData) {
    try {
      const { email, password } = formData;
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", user);
      message = 'You have successfully logging in!'
    } catch (error) {
      console.error("Error logging in:", error);
      message = error.message;
    }
  }
  // console.log('submitted login form')

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get('name');
    const dob = formData.get('dob');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if (password !== confirmPassword || !issignIn) {
      message = "Passwords must match!";
      return;
    }

   if (isSignIn) {
  logIn({ email, password });
} else {
  signUp({ email, password });
}


    // Write the form data to the Firebase Realtime Database
    const username = email.replace(/[@.]/g, '-'); // create a username from the user's email
    set(ref(db, 'users/' + username), {
      name,
      dob,
      email
    }).then(() => {
      console.log('Data written successfully!');
    }).catch((error) => {
      console.error('Error writing data: ', error);
      message = 'Error writing data to database!';
    });
  };
</script>



<main>
  <h1>Welcome to Life Cycle!</h1>
  <!-- <img src={logo} alt="life-cycle-logo" /> -->

  {#if isSignIn}
    <p>Already created an account? <button class="button" on:click={toggleForm}>Log in here</button></p>
    <form class="form-signup" on:submit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Date of Birth:
        <input type="date" name="dob" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" required />
      </label>
      <button class="button" type="submit">Sign Up</button>
      {#if message}
  <p>{message}</p>
{/if}

</form>

  {:else}
    <p>Don't have an account? <button class="button" on:click={toggleForm}>Sign up here</button></p>
    <form class="form-signin" on:submit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button class="button" type="submit">Log In</button>
        {#if message}
  <p>{message = 'successfully logged in!'}</p>
{/if}
    </form>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #ddd;
    padding: 20px;
    margin-top: 20px;
  }
  
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  
  input {
    padding: 10px;
    border: none;
    border-bottom: 2px solid #ddd;
    font-size: 16px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  .button:hover{
    background-color: red;
  }
  
  /* img {
    width: 200px;
    margin-top: 20px;
  } */
</style>
