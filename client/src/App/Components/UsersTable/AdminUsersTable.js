import UsersTablePlaceholder from "./UsersTablePlaceholder";

import classes from "./AmbassadorUsersTable.module.css";

const AdminUsersTable = (props) => {
  if(props.users.length == 0){
    return (
        <div className={classes.mainContainer}>
            <table className={classes.usersTable}>
                <tr className={classes.userRow}>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>VERIFICATION STATUS</th>
                    <th>REJECT USER</th>
                    <th>RESTORE USER STATUS</th>
                    <th>ACCEPT USER</th>
                </tr>
        
                {props.users.map((user) => {
                    return (
                    <tr key={user["user_id"]} className={`${classes.userRow} ${classes.regularCell}`}>
                        <td>{user["user_name"]}</td>
                        <td>{user["user_email"]}</td>
                        <td className={user["user_verification_status"] === "unverified" ? classes.unverifiedColor : user["user_verification_status"] === "accepted" ? classes.acceptedColor : classes.rejectedColor}>{user["user_verification_status"].toUpperCase()}</td>
                        <td><button className={classes.rejectButton} onClick={props.rejectHandler.bind(null, user["user_id"])}>REJECT</button></td>
                        <td><button className={classes.restoreButton} onClick={props.restoreHandler.bind(null, user["user_id"])}>RESTORE STATUS</button></td>
                        <td><button className={classes.acceptButton} onClick={props.acceptHandler.bind(null, user["user_id"])}>ACCEPT</button></td>
                    </tr>
                    )
                })}
            </table>
        </div>
    );
} else {
    return(
        <UsersTablePlaceholder />
    );
}
}

export default AdminUsersTable;