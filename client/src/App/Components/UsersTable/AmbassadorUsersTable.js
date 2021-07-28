const AmbassadorUsersTable = (props) => {    
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Verification Status</th>
                </tr>
        
                {props.users.map((user) => {
                    return (
                    <tr key={user["user_id"]}>
                        <td>{user["user_name"]}</td>
                        <td>{user["user_email"]}</td>
                        <td>{user["user_verification_status"]}</td>
                    </tr>
                    )
                })}
            </table>
        </div>
    );
  }
  
  export default AmbassadorUsersTable;