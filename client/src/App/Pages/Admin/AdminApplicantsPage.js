import { useState, useEffect } from "react";

import AdminLayout from "../../Components/Layout/AdminLayout";

import axios from "axios";

function AdminApplicantsPage(props){    
  const [applicants, setApplicants] = useState([]);

  const getApplicants = () => {
    axios.get("/api/applicants")
      .then((response) => setApplicants(response.data))
        .catch((err) => console.log(err));
  };

  useEffect(getApplicants, []);

  const submissionHandler = (passedElement) => {
    props.history.push(`/admin/applicants/${passedElement}`);
  };

  return (
    <AdminLayout>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Registration Status</th>
          <th>Application Time</th>
          <th></th>
        </tr>

        { applicants.map((applicant) => {
          return (
            <tr key={ applicant["applicant_id"] }>
              <td>{ applicant["applicant_first_name"] }</td>
              <td>{ applicant["applicant_last_name"] }</td>
              <td>{ applicant["applicant_email"] }</td>
              <td>{ applicant["applicant_registration_status"] }</td>
              <td>{ applicant["applicant_created_at"] }</td>
              <td><button onClick={submissionHandler.bind(null, applicant["applicant_id"])} >View</button></td>
            </tr>
          )
        }) }
      </table>
    </AdminLayout>

  );
}

export default AdminApplicantsPage;