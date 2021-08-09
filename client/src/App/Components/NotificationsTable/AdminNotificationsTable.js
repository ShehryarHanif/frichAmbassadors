import axios from "axios";

import NotificationsTablePlaceholder from "./NotificationsTablePlaceholder";

import classes from "./AdminNotificationsTable.module.css";

const AdminNotificationsTable = (props) => { 
  const deletionHandler = (notificationIdentifier) => {
    axios({
      method: "post",
      url: `/api/delete-notification/${notificationIdentifier}`,
      data: {
          "notification_id": notificationIdentifier
      },
      headers: {"Content-Type": "application/json"}
    })
      .then(() => {
        props.getData();
      })
        .catch((error) => alert(error));
  };
  
  if(props.notifications.length > 0){        
    return (
        <div className={classes.mainContainer}>  
            <table className={classes.notificationsTable}>
                <tr className={classes.notificationRow}>
                    <th>SUBJECT</th>
                    <th>CONTENT</th>
                    <th>TIME</th>
                    <th>NOTIFICATION DELETION</th>
                </tr>

                {props.notifications.map((notification) => {
                    return (
                    <tr key={notification["notification_id"]} className={`${classes.notificationRow} ${classes.regularCell}`}>
                        <td>{notification["notification_subject"]}</td>
                        <td>{notification["notification_content"]}</td>
                        <td>{notification["notification_created_at"]}</td>
                        <td><button onClick={deletionHandler.bind(null, notification["notification_id"])}>DELETE</button></td>
                    </tr>
                    )
                }) }
            </table>
        </div>
    );
  } else{
      return (
          <NotificationsTablePlaceholder />
      );
  };

}

export default AdminNotificationsTable;