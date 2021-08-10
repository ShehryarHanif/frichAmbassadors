import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";

import classes from "./AmbassadorAuthenticationForm.module.css";

const AdminAuthenticationForm = (props) => {
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
        history.replace("/ambassador");
    })
        .catch(() => alert("OOPS! THERE WAS A PROBLEM. TRY AGAIN!"));
  };

  return (
    <div className={`${classes.mainContainer} ${props.className}`}>
      <div className={classes.mainHeading}>
        AMBASSADOR LOG-IN
      </div>

      <form method="POST" onSubmit={ submissionHandler }>
        <input className={classes.inputBox} type="email" id="email" placeholder="Your Email" required onChange={emailChangeHandler} />

        <input className={classes.inputBox} type="password" id="password" placeholder="Your Password" required onChange={passwordChangeHandler} />

        <input className={classes.submission} type="submit" value="LOG IN" />
      </form>
    </div>
  );
};

export default AdminAuthenticationForm;