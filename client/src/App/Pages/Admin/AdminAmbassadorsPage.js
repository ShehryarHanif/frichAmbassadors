import { useState, useEffect } from "react";

import axios from "axios";

import AdminLayout from "../../Components/Layout/AdminLayout";

function AdminAmbassadorsPage(props){    
  const [ambassadors, setAmbassadors] = useState([]);

  const getData = () => {
    axios.get("/api/ambassadors-info/")
      .then((response) => setAmbassadors(response.data))
        .catch((err) => console.log(err));
  };

  useEffect(getData, []);

  const submissionHandler = (passedElement) => {
    props.history.push(`/admin/ambassadors/${passedElement}`);
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
                <th>Tier</th>
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
                    <td>{ambassador["ambassador_tier"]}</td>
                    <td><button onClick={submissionHandler.bind(null, ambassador["ambassador_id"])} >View</button></td>
                    </tr>
                )
                }) }
      </table>
    </AdminLayout>

  );
}

export default AdminAmbassadorsPage;