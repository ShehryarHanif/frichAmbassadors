import { useState, useEffect } from "react";

import axios from "axios";

import NotificationsTablePlaceholder from "./NotificationsTablePlaceholder";

const AmbassadorNotificationsTable = () => {    
  const [notifications, setNotifications] = useState([]);

  const getData = () => {
    axios.get("/api/ambassador-notifications")
      .then((response) => setNotifications(response.data))
        .catch((err) => console.log(err));
  };

  useEffect(getData, []);
  
  if(notifications.length > 0){        
    return (
        <div>  
            <table>
            <tr>
                <th>Subject</th>
                <th>Content</th>
                <th>Time</th>
                <th></th>
            </tr>

            {notifications.map((notification) => {
                return (
                <tr key={notification["notification_id"]}>
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