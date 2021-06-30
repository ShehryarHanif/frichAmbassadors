import { useState, useEffect, Fragment } from "react";

import axios from "axios";

function AdminAmbassadorPage(props){    
  const [ambassador, setAmbassador] = useState({});
  const [users, setUsers] = useState([]);

  const getAmbassador = () => {
    axios.get(`/api/ambassadorsinfo/${props.match.params.identifier}`)
      .then((response) => {
        setAmbassador(response.data)
      } )
        .catch((err) => console.log(err));
  };

  const getUsers = () => {
    axios.get(`/api/ambassadors/${ambassador["ambassador_id"] || "1"}`)
      .then((response) => {setUsers(response.data)})
        .catch((err) => console.log(err));
  };

  useEffect(getAmbassador, []);
  useEffect(getUsers, []);

  const submissionHandler = (passedElement) => {
    props.history.push(`/admin/applicants/${passedElement}`);
  };

  return (
    <Fragment>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Referral Code</th>
          <th>Number of Users</th>
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
          <td>{ ambassador["number_of_users"] }</td>
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

export default AdminAmbassadorPage;