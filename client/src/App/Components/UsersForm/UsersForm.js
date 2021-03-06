import { useState } from "react";

import axios from "axios";

import classes from "./UsersForm.module.css"; 

const UsersForm = (props) => {    
    const [newUserName, setNewUserName] = useState("");
    const [newUserEmail, setNewUserEmail] = useState("");
  
    const nameChangeHandler = (event) => {
       setNewUserName(event.target.value);
    };
  
    const emailChangeHandler = (event) => {
      setNewUserEmail(event.target.value);
    };
  
    const submissionHandler = (event) => {
      event.preventDefault();
  
      const formData = {
        "user_name": newUserName,
        "user_email": newUserEmail,
        "user_ambassador_id": props.ambassador["ambassador_id"],
        "user_referral_code": props.ambassador["ambassador_referral_code"],
        "user_verification_status": "unverified",
      }
  
      axios({
        method: "post",
        url: "/api/users/new-user",
        data: formData,
        headers: {"Content-Type": "application/json"}
      })
        .then(async () => {
          await props.getUsers();
          await props.getNumber();
          await props.getVerifiedNumber();
  
          setNewUserName("");
          setNewUserEmail("");
        })
          .catch((error) => alert("OOPS! THERE WAS A PROBLEM. TRY AGAIN!"));
    };
  
    return (
        <div className={classes.mainContainer}>
            <form method="POST" onSubmit={ submissionHandler }>
                <input className={classes.inputBox} type="text" placeholder="NAME" minLength="2" required value={ newUserName } onChange={ nameChangeHandler } />
        
                <input className={classes.inputBox} type="email" placeholder="EMAIL" required value={ newUserEmail } onChange={ emailChangeHandler } />
        
                <input className={classes.submission} type="submit" value="ADD NEW USER" />
            </form>
        </div>
    );
}
  
export default UsersForm;
