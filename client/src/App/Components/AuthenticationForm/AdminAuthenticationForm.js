import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";

import { loginActions } from "../../store/loginStore";

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
        dispatch(loginActions.toggle());

        history.replace("/admin");
    })
        .catch(() => alert("OOPS! THERE WAS A PROBLEM. TRY AGAIN!"));
  };

  return (
    <div className={`${classes.mainContainer} ${props.className}`}>
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
    </div>
  );
};

export default AdminAuthenticationForm;