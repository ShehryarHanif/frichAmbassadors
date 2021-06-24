// import { useState } from "react";

// import Expenses from "./Expenses/Expenses";
// import NewExpense from "./NewExpenses/NewExpense";

// const dummyExpenses = [
//   {
//     title: "Toilet Paper",
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   {
//     id: "e2",
//     title: "New TV",
//     amount: 799.49,
//     date: new Date(2021, 2, 12)
//   },
//   {
//     title: "Car Insurance",
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     title: "New Desk (Wooden)",
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   }
// ];

// function AmbassadorPage(){    
//   const [expenses, setExpenses] = useState(dummyExpenses);

//   const addExpenseHandler = (expense) => {
//     setExpenses((previousExpenses) => [expense, ...previousExpenses])
//   }

//   return (
//     <div>
//       <NewExpense onAddExpense={ addExpenseHandler }/>

//       <Expenses expenseItems={ expenses } />
//     </div>
//   );
// }

// export default AmbassadorPage;

import { useState, useEffect } from "react";

import axios from "axios";

function AmbassadorPage(){    
  const [users, setUsers] = useState([]);
  const [ambassador, setAmbassador] = useState({});

  useEffect(() => {
    axios.get(`/api/ambassadors/${ambassador["ambassador_id"] || "1"}`)
      .then((response) => setUsers(response.data))
        .catch((err) => console.log(err));
  });
  
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
      .then((response => {
        console.log(response);

        setNewUserName("");
        setNewUserEmail("");
      }))
        .catch((error) => console.log(error));
  };

  return (
    <div>
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
    </div>

  );
}

export default AmbassadorPage;