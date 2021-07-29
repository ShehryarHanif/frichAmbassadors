import UsersTablePlaceholder from "./UsersTablePlaceholder";

import classes from "./AmbassadorUsersTable.module.css";

const AmbassadorUsersTable = (props) => {    
    if(props.users.length > 0){
        return (
            <div className={classes.mainContainer}>
                <table className={classes.usersTable}>
                    <tr className={classes.userRow}>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>VERIFICATION STATUS</th>
                    </tr>
            
                    {props.users.map((user) => {
                        return (
                        <tr key={user["user_id"]} className={`${classes.userRow} ${classes.regularCell}`}>
                            <td>{user["user_name"]}</td>
                            <td>{user["user_email"]}</td>
                            <td className={user["user_verification_status"] === "unverified" ? classes.unverifiedColor : user["user_verification_status"] === "accepted" ? classes.acceptedColor : classes.rejectedColor}>{user["user_verification_status"].toUpperCase()}</td>
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
};
  
export default AmbassadorUsersTable;