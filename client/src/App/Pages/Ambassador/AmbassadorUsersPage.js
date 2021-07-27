import { useState, useEffect } from "react";

import axios from "axios";

import AmbassadorLayout from "../../Components/Layout/AmbassadorLayout";

function AmbassadorUsersPage(){    
  const [users, setUsers] = useState([]);
  const [ambassador, setAmbassador] = useState({});
  const [numberOfUsers, setNumberOfUsers] = useState(null);
  const [verifiedNumberOfUsers, setVerifiedNumberOfUsers] = useState(null);

  const getAmbassador = () => {
    axios.get(`/api/ambassadors/ambassador-info`)
      .then((response) => setAmbassador(response.data))
        .catch((err) => console.log(err));
  };

  const getData = () => {
    axios.get(`/api/ambassadors/users-info`)
      .then((response) => setUsers(response.data))
        .catch((err) => console.log(err));
  };

  const getNumber = () => {
    axios.get(`/api/ambassadors-info/number`)
      .then((response) => {setNumberOfUsers(response.data["number_of_users"])})
        .catch((err) => console.log(err));
  };
  
  const getVerifiedNumber = () => {
    axios.get(`/api/ambassadors-info/verification-number`)
      .then((response) => {setVerifiedNumberOfUsers(response.data["verified_number_of_users"])})
        .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getInformation = async () => {
      await getAmbassador();
      await getData();
      await getNumber();
      await getVerifiedNumber();
    }

    getInformation();
  }, []);

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
      "user_ambassador_id": ambassador["ambassador_id"],
      "user_referral_code": ambassador["ambassador_referral_code"],
      "user_verification_status": "unverified",
    }

    axios({
      method: "post",
      url: "/api/users/new-user",
      data: formData,
      headers: {"Content-Type": "application/json"}
    })
      .then(async () => {
        await getData();
        await getNumber();
        await getVerifiedNumber();

        setNewUserName("");
        setNewUserEmail("");
      })
        .catch((error) => console.log(error));
  };

  return (
    <AmbassadorLayout>
      <form method="POST" onSubmit={ submissionHandler }>
        <label>Name</label>
        <input type="text" value={ newUserName } onChange={ nameChangeHandler } />

        <label>Email</label>
        <input type="email" value={ newUserEmail } onChange={ emailChangeHandler } />

        <button type="submit">Add User</button>
      </form>

      <p>Referral Code: {ambassador["ambassador_referral_code"]}</p>
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
    </AmbassadorLayout>

  );
}

export default AmbassadorUsersPage;