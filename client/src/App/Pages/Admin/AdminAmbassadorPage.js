import { useState, useEffect } from "react";

import axios from "axios";

import AdminLayout from "../../Components/Layout/AdminLayout";
import AdminUsersTable from "../../Components/UsersTable/AdminUsersTable";
import AmbassadorInformation from "../../Components/AmbassadorInformation/AmbassadorInformation";

import classes from "./AdminAmbassadorPage.module.css";

const AdminAmbassadorPage = (props) => {    
  const [ambassador, setAmbassador] = useState({});
  const [users, setUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(null);
  const [verifiedNumberOfUsers, setVerifiedNumberOfUsers] = useState(null);
  const [pendingNumberOfUsers, setPendingNumberOfUsers] = useState(null);

  const getAmbassador = () => {
    axios.get(`/api/ambassadors-info/${props.match.params.identifier}`)
      .then((response) => {setAmbassador(response.data)})
        .catch((err) => alert(err));
  };

  const getUsers = () => {
    axios.get(`/api/ambassadors/${ambassador["ambassador_id"]}`)
      .then((response) => {setUsers(response.data)})
        .catch((err) => alert(err));
  };
  
  const getNumber = () => {
    axios.get(`/api/ambassadors-info/${ambassador["ambassador_id"] }/number`)
      .then((response) => {setNumberOfUsers(response.data["number_of_users"])})
        .catch((err) => alert(err));
  };
  
  const getVerifiedNumber = () => {
    axios.get(`/api/ambassadors-info/${ambassador["ambassador_id"]}/verification-number`)
      .then((response) => {setVerifiedNumberOfUsers(response.data["verified_number_of_users"])})
        .catch((err) => alert(err));
  };

  const getPendingNumber = () => {
    axios.get(`/api/ambassadors-info/${ambassador["ambassador_id"]}/pending-number`)
      .then((response) => {setVerifiedNumberOfUsers(response.data["pending_number_of_users"])})
        .catch((err) => alert(err));
  };

  useEffect(() => {
    const getInformation = async () => {
      await getAmbassador();
      await getUsers();
      await getNumber();
      await getVerifiedNumber();
      await getPendingNumber();
    }

    getInformation();
  }, [ambassador]);

  const submissionHandler = (passedElement) => {
    props.history.push(`/admin/applicants/${passedElement}`);
  };
  
 const statusChanger = (userId, newStatus) => {
  axios({
    method: "post",
    url: `/api/users/status`,
    data: {
      "status_update": newStatus,
      "user_id": userId
    },
    headers: {"Content-Type": "application/json"}
  })
    .then(() => {
      getVerifiedNumber();

      getUsers();
    })
      .catch((error) => alert(error)); 
  };

  const rejectHandler = (userId) => {
    statusChanger(userId, "rejected");
  }

  const restoreHandler = (userId) => {
    statusChanger(userId, "unverified");
  }

  const acceptHandler = (userId) => {
    statusChanger(userId, "accepted");
  };

  return (
    <div className={classes.adminAmbassadorPageBackground} >
      <AdminLayout widthOverride={classes.widthOverride}>
        <AmbassadorInformation ambassador={ambassador} numberOfUsers={numberOfUsers} verifiedNumberOfUsers={verifiedNumberOfUsers} pendingNumberOfUsers={pendingNumberOfUsers} submissionHandler={submissionHandler} />

        <AdminUsersTable users={users} rejectHandler={rejectHandler} restoreHandler={restoreHandler} acceptHandler={acceptHandler}/>
      </AdminLayout>
    </div>
  );
}

export default AdminAmbassadorPage;