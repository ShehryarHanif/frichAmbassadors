import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // let url;

    // if(isLogin){
    //   url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDS9rxx7HoQK6ZUO49Gi63xzU8pr2uz6cc";
    // } else{
    //   url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDS9rxx7HoQK6ZUO49Gi63xzU8pr2uz6cc";
    // }
    
    // fetch(url,
    // {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: enteredEmail,
    //     password: enteredPassword,
    //     returnSecureToken: true
    //   }),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // }).then((res) => {
    //   setIsLoading(false);

    //   if(res.ok) {
    //     return res.json();
    //   } else {
    //     return res.json().then((data) => {
    //       let errorMessage = "Authentication failed!";

    //       // if(data && data.error && data.error.message){
    //       //   errorMessage = data.error.message;
    //       // }

    //       // alert(errorMessage);

    //       throw new Error(errorMessage);
    //     })
    //   }
    // }).then((data) => {
    //   const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000)); // Convert the string to a number and turn it into milliseconds

    //   authContext.login(data.idToken, expirationTime);

    //   history.replace("/");
    // }).catch((err) => {
    //   console.log(err);

    //   alert(err.message);
    // });
  };

  return (
    <section>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>

        <div>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordInputRef} />
        </div>

        <div>
          <button>{isLogin ? "Login" : "Create Account"}</button>

          <button type="button" onClick={switchAuthModeHandler}>{isLogin ? "Create new account" : "Login with existing account"}</button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;