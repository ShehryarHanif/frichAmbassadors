import { useState, useEffect } from "react";

import axios from "axios";

import NotificationsTablePlaceholder from "./NotificationsTablePlaceholder";

import classes from "./AmbassadorNotificationsTable.module.css";

const AmbassadorNotificationsTable = () => {
    const [notifications, setNotifications] = useState([]);

    const getData = () => {
        axios.get("/api/ambassador-notifications")
            .then((response) => setNotifications(response.data))
                .catch((err) => alert(err));
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
                        return (
                        <tr key={notification["notification_id"]} className={`${classes.notificationRow} ${classes.regularCell}`}>
                            <td>{notification["notification_subject"]}</td>
                            <td>{notification["notification_content"]}</td>
                            <td>{notification["notification_created_at"]}</td>
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