import { useState, useEffect } from "react";

import axios from "axios";

import AmbassadorLayout from "../../Components/Layout/AmbassadorLayout";

import UsersForm from "../../Components/UsersForm/UsersForm";
import AmbassadorDetails from "../../Components/AmbassadorDetails/AmbassadorDetails";
import AmbassadorUsersTable from "../../Components/UsersTable/AmbassadorUsersTable";

import classes from "./AmbassadorUsersPage.module.css";

const AmbassadorUsersPage = () => {
  const [ambassador, setAmbassador] = useState({ "ambassador_id": 2, "ambassador_first_name": "Shehryar", "ambassador_last_name": "Hanif", "ambassador_email": "shehryarhanif123@gmail.com", "ambassador_referral_code": "4501240", "ambassador_university": "dsfadfaf", "ambassador_university_location": "dfafasf", "ambassador_tier": "bronze" });
  const [users, setUsers] = useState([ { "user_id": 4, "user_name": "newUser", "user_email": "Hello@gmai.com", "user_ambassador_id": 2, "user_referral_code": "4501240", "user_created_at": "2021-07-28T15:41:44.000Z", "user_verification_status": "accepted" }, { "user_id": 3, "user_name": "Shehryar", "user_email": "sheh@g.cmo", "user_ambassador_id": 2, "user_referral_code": "4501240", "user_created_at": "2021-07-27T15:33:55.000Z", "user_verification_status": "unverified" }, { "user_id": 2, "user_name": "dddd", "user_email": "dddddddddddd", "user_ambassador_id": 2, "user_referral_code": "4501240", "user_created_at": "2021-07-24T14:56:09.000Z", "user_verification_status": "unverified" }, { "user_id": 1, "user_name": "ddddd", "user_email": "dfdafdfa", "user_ambassador_id": 2, "user_referral_code": "4501240", "user_created_at": "2021-07-24T14:56:08.000Z", "user_verification_status": "rejected" } ]);
  const [numberOfUsers, setNumberOfUsers] = useState(5);
  const [verifiedNumberOfUsers, setVerifiedNumberOfUsers] = useState(6);

  // const [ambassador, setAmbassador] = useState({});
  // const [users, setUsers] = useState([]);
  // const [numberOfUsers, setNumberOfUsers] = useState(null);
  // const [verifiedNumberOfUsers, setVerifiedNumberOfUsers] = useState(null);

  const getAmbassador = () => {
    axios.get(`/api/ambassadors/ambassador-info`)
      .then((response) => setAmbassador(response.data))
        .catch((err) => console.log(err));
  };

  const getUsers = () => {
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
      await getUsers();
      await getNumber();
      await getVerifiedNumber();
    }

    getInformation();

    console.log(ambassador, users)
  }, [ambassador, users]);

  return (
    <div className={classes.usersPageBackground}>
      <AmbassadorLayout>
        <AmbassadorDetails ambassador={ambassador} numberOfUsers={numberOfUsers} verifiedNumberOfUsers={verifiedNumberOfUsers} />

        <UsersForm ambassador={ambassador} getUsers={getUsers} getNumber={getNumber} getVerifiedNumber={getVerifiedNumber} />

        <AmbassadorUsersTable users={users} />
      </AmbassadorLayout>
    </div>
  );
}

export default AmbassadorUsersPage;