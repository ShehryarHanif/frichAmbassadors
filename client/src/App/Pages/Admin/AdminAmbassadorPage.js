import { useState, useEffect } from "react";

import axios from "axios";

import AdminLayout from "../../Components/Layout/AdminLayout";

function AdminAmbassadorPage(props){    
  const [ambassador, setAmbassador] = useState();
  const [users, setUsers] = useState();
  const [numberOfUsers, setNumberOfUsers] = useState();
  const [verifiedNumberOfUsers, setVerifiedNumberOfUsers] = useState();

  const getAmbassador = () => {
    axios.get(`/api/ambassadors-info/${props.match.params.identifier}`)
      .then((response) => {
        setAmbassador(response.data)
      } )
        .catch((err) => console.log(err));
  };

  const getUsers = () => {
    axios.get(`/api/ambassadors/${ambassador["ambassador_id"]}`)
      .then((response) => {setUsers(response.data)})
        .catch((err) => console.log(err));
  };
  
  const getNumber = () => {
    axios.get(`/api/ambassadors-info/${ambassador["ambassador_id"] }/number`)
      .then((response) => {setNumberOfUsers(response.data["number_of_users"])})
        .catch((err) => console.log(err));
  };
  
  const getVerifiedNumber = () => {
    axios.get(`/api/ambassadors-info/${ambassador["ambassador_id"]}/verification-number`)
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
  });

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
      .catch((error) => console.log(error)); 
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
    <AdminLayout>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Referral Code</th>
          <th>Number of Users</th>
          <th>Number of Verified Users</th>
          <th>Tier</th>
          <th>Instagram</th>
          <th>TikTok</th>
          <th></th>
        </tr>

        <tr key={ ambassador["ambassador_id"] }>
          <td>{ ambassador["ambassador_first_name"] }</td>
          <td>{ ambassador["ambassador_last_name"] }</td>
          <td>{ ambassador["ambassador_email"] }</td>
          <td>{ ambassador["ambassador_referral_code"] }</td>
          <td>{ numberOfUsers }</td>
          <td>{ verifiedNumberOfUsers }</td>
          <td>{ ambassador["ambasador_tier"] }</td>
          <td>{ ambassador["ambassador_instagram"] }</td>
          <td>{ ambassador["ambassador_tiktok"] }</td>
          <td><button onClick={submissionHandler.bind(null, ambassador["ambassador_applicant_id"])} >Go To Application</button></td>
        </tr>
      </table>

      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Verification Status</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>

        { users.map((user) => {
          return (
            <tr key={ user["user_id"] }>
              <td>{ user["user_name"] }</td>
              <td>{ user["user_email"] }</td>
              <td>{user["user_verification_status"]}</td>
              <td><button onClick={restoreHandler.bind(null, user["user_id"])} >Restore</button></td>
              <td><button onClick={rejectHandler.bind(null, user["user_id"])} >Reject</button></td>
              <td><button onClick={acceptHandler.bind(null, user["user_id"])} >Accept</button></td>
            </tr>
          )
        }) }
      </table>
    </AdminLayout>

  );
}

export default AdminAmbassadorPage;