import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";

import classes from "./AdminAuthenticationForm.module.css";

const AdminAuthenticationForm = (props) => {
  const dispatch = useDispatch();

  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const history = useHistory();

  const emailChangeHandler = (event) => {
    setAdminEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setAdminPassword(event.target.value);
  };

  const submissionHandler = (event) => {
    event.preventDefault();
  
    const enteredEmail = adminEmail;
    const enteredPassword = adminPassword;

    const formData = {
      "admin_email": enteredEmail,
      "admin_password": enteredPassword
    }
    
    axios({
      method: "post",
      url: "../authentication/admin",
      data: formData,
      headers: {"Content-Type": "application/json"}
    })
      .then(() => {
        history.replace("/admin");
    })
        .catch(() => alert("OOPS! THERE WAS A PROBLEM. TRY AGAIN!"));
  };

   return (
    <div className={`${classes.mainContainer} ${props.className}`}>
      <div className={classes.mainHeading}>
        ADMIN LOG-IN
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