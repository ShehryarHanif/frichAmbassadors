import { useState, useEffect, Fragment } from "react";

import axios from "axios";

function AdminAmbassadorsPage(props){    
  const [ambassadors, setAmbassadors] = useState([]);

  const getData = () => {
    axios.get("/api/ambassadorsinfo/")
      .then((response) => setAmbassadors(response.data))
        .catch((err) => console.log(err));
  };

  useEffect(getData, []);

  const submissionHandler = (passedElement) => {
    props.history.push(`/admin/ambassadors/${passedElement}`);
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
                <th></th>
                </tr>

                { ambassadors.map((ambassador) => {
                return (
                    <tr key={ ambassador["ambassador_id"] }>
                    <td>{ ambassador["ambassador_first_name"] }</td>
                    <td>{ ambassador["ambassador_last_name"] }</td>
                    <td>{ ambassador["ambassador_email"] }</td>
                    <td>{ ambassador["ambassador_referral_code"] }</td>
                    <td>{ ambassador["number_of_users"] }</td>
                    <td><button onClick={submissionHandler.bind(null, ambassador["ambassador_id"])} >View</button></td>
                    </tr>
                )
                }) }
      </table>
    </Fragment>

  );
}

export default AdminAmbassadorsPage;