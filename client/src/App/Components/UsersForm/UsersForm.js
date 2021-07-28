import { useState } from "react";

import axios from "axios";

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
          .catch((error) => console.log(error));
    };
  
    return (
        <div>
            <form method="POST" onSubmit={ submissionHandler }>
                <label>Name</label>
                <input type="text" value={ newUserName } onChange={ nameChangeHandler } />
        
                <label>Email</label>
                <input type="email" value={ newUserEmail } onChange={ emailChangeHandler } />
        
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}
  
export default UsersForm;
