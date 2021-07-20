import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";

import InitialLayout from "../../Components/Layout/InitialLayout";

import { loginActions } from "../../store/loginStore";

const AuthenticationPage = () => {
  const dispatch = useDispatch();

  const [ambassadorEmail, setAmbassadorEmail] = useState("");
  const [ambassadorPassword, setAmbassadorPassword] = useState("");

  const history = useHistory();

  const emailChangeHandler = (event) => {
    setAmbassadorEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setAmbassadorPassword(event.target.value);
  };

  const submissionHandler = (event) => {
    event.preventDefault();
  
    const enteredEmail = ambassadorEmail;
    const enteredPassword = ambassadorPassword;

    console.log(enteredEmail, enteredPassword);
    
    const formData = {
      "ambassador_email": enteredEmail,
      "ambassador_password": enteredPassword
    }
    
    axios({
      method: "post",
      url: "../authentication/ambassador",
      data: formData,
      headers: {"Content-Type": "application/json"}
    })
      .then(() => {
        dispatch(loginActions.toggle());
        
        history.replace("/ambassador");
    })
        .catch((error) => console.log(error));
  };

  return (
    <InitialLayout>
      <h1>Log In</h1>

      <form method="POST" onSubmit={ submissionHandler }>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required onChange={emailChangeHandler} />
        </div>

        <div>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required onChange={passwordChangeHandler} />
        </div>

        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    </InitialLayout>
  );
};

export default AuthenticationPage;