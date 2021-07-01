import { useState, useEffect, Fragment } from "react";

import axios from "axios";

function AmbassadorUsersPage(){    
  const [users, setUsers] = useState([]);
  const [ambassador, setAmbassador] = useState({});
  const [numberOfUsers, setNumberOfUsers] = useState(null);
  const [verifiedNumberOfUsers, setVerifiedNumberOfUsers] = useState(null);

  const getData = () => {
    axios.get(`/api/ambassadors/${ambassador["ambassador_id"] || "1"}`)
      .then((response) => setUsers(response.data))
        .catch((err) => console.log(err));
  };

  
  const getNumber = () => {
    axios.get(`/api/ambassadorsinfo/${ambassador["ambassador_id"] || "1"}/number`)
      .then((response) => {setNumberOfUsers(response.data["number_of_users"])})
        .catch((err) => console.log(err));
  };
  
  const getVerifiedNumber = () => {
    axios.get(`/api/ambassadorsinfo/${ambassador["ambassador_id"] || "1"}/verificationnumber`)
      .then((response) => {setVerifiedNumberOfUsers(response.data["verified_number_of_users"])})
        .catch((err) => console.log(err));
  };

  useEffect(getData, []);
  useEffect(getNumber, []);
  useEffect(getVerifiedNumber, []);
  
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
      "user_ambassador_id": ambassador["ambassador_id"] || "1",
      "user_referral_code": ambassador["referral_code"] || "applicantCodeOne",
      "user_verification_status": "unverified"
    }

    axios({
      method: "post",
      url: "/api/newuser",
      data: formData,
      headers: {"Content-Type": "application/json"}
    })
      .then(async () => {
        await getData();
        await getNumber;
        await getVerifiedNumber;

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

      <p>Referral Code: {ambassador["ambassador_referral_code"] || "applicantCodeOne"}</p>
      <p>Number of Users: {numberOfUsers}</p>
      <p>Number of Verified Users: {verifiedNumberOfUsers}</p>

      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Verification Status</th>
        </tr>

        { users.map((user) => {
          return (
            <tr key={ user["user_id"] }>
              <td>{ user["user_name"] }</td>
              <td>{ user["user_email"] }</td>
              <td>{ user["user_verification_status"] }</td>
            </tr>
          )
        }) }
      </table>
    </Fragment>

  );
}

export default AmbassadorUsersPage;