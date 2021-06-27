import { useState, useEffect, Fragment } from "react";

import axios from "axios";

function AmbassadorPage(){    
  const [users, setUsers] = useState([]);
  const [ambassador, setAmbassador] = useState({});

  const getData = () => {
    axios.get(`/api/ambassadors/${ambassador["ambassador_id"] || "1"}`)
      .then((response) => setUsers(response.data))
        .catch((err) => console.log(err));
  };

  useEffect(getData, []);
  
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
      "user_registration_status": "pending",
      "user_ambassador_id": ambassador["ambassador_id"] || 1,
      "user_referral_code": ambassador["referral_code"] || "applicantCodeOne"
    }

    axios({
      method: "post",
      url: "api/newuser",
      data: formData,
      headers: {"Content-Type": "application/json"}
    })
      .then(() => {
        getData();

        setNewUserName("");
        setNewUserEmail("");
      })
        .catch((error) => console.log(error));
  };

  return (
    <Fragment>
      <form method="POST" onSubmit={ submissionHandler }>
        <label>Name</label>
        <input type="text" value={ newUserName } onChange={ nameChangeHandler } />

        <label>Email</label>
        <input type="email" value={ newUserEmail } onChange={ emailChangeHandler } />

        <button type="submit">Add User</button>
      </form>

      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>

        { users.map((user) => {
          return (
            <tr key={ user["user_id"] }>
              <td>{ user["user_name"] }</td>
              <td>{ user["user_email"] }</td>
            </tr>
          )
        }) }
      </table>
    </Fragment>

  );
}

export default AmbassadorPage;