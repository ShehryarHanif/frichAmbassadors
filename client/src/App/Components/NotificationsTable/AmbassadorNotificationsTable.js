import { useState, useEffect } from "react";

import axios from "axios";

import NotificationsTablePlaceholder from "./NotificationsTablePlaceholder";

import classes from "./AmbassadorNotificationsTable.module.css";

const AmbassadorNotificationsTable = () => {
  const [notifications, setNotifications] = useState([
    {
        "notification_id": 2,
        "notification_content": "Lkjdlfj",
        "notification_subject": "New",
        "notification_created_at": "2021-07-28T16:12:31.000Z"
    },
    {
        "notification_id": 3,
        "notification_content": "Lkjdlfj",
        "notification_subject": "New",
        "notification_created_at": "2021-07-28T16:12:31.000Z"
    },
    {
        "notification_id": 1,
        "notification_content": "HetMoney",
        "notification_subject": "Get Money",
        "notification_created_at": "2021-07-28T16:11:56.000Z"
    }
  ]);
  
  // const [notifications, setNotifications] = useState([]);

  const getData = () => {
    axios.get("/api/ambassador-notifications")
      .then((response) => setNotifications(response.data))
        .catch((err) => console.log(err));
  };

  useEffect(getData, []);
  
  if(notifications.length > 0){        
    return (
        <div className={classes.mainContainer}>  
            <table className={classes.notificationsTable}>
                <tr className={classes.notificationRow}>
                    <th>SUBJECT</th>
                    <th>CONTENT</th>
                    <th>TIME</th>
                    <th></th>
                </tr>

                {notifications.map((notification) => {
                    // console.log(Object.getPrototypeOf(SimpleDateFormat("dd-MMM-yy").parse((notification["notification_created_at"]))));

                    return (
                    <tr key={notification["notification_id"]} className={`${classes.notificationRow} ${classes.regularCell}`}>
                        <td>{notification["notification_subject"]}</td>
                        <td>{notification["notification_content"]}</td>
                        <td>{Date(notification["notification_created_at"])}</td>
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

export default AmbassadorNotificationsTable;