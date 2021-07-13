import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

const AdminAuthenticationPage = () => {
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

    console.log(enteredEmail, enteredPassword);
    
    // fetch("/authentication/admin",
    // {
    //   method: "POST",
    //   body: JSON.stringify({
    //     admin_email: enteredEmail,
    //     admin_password: enteredPassword,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // }).then((res) => {
    //   if(res.ok) {
    //     return res.json();
    //   } else {
    //     return res.json().then((data) => {
    //       let errorMessage = "Authentication Failed";

    //       throw new Error(errorMessage);
    //     })
    //   }
    // }).then((data) => {
    //   history.replace("/");
    // }).catch((err) => {
    //   console.log(err);

    //   alert(err.message);
    // });

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
      history.replace("/");
    })
        .catch((error) => console.log(error));
  };

  return (
    <section>
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
    </section>
  );
};

export default AdminAuthenticationPage;