import AmbassadorLayout from "../../Components/Layout/AmbassadorLayout";
import AmbassadorNotificationsTable from "../../Components/NotificationsTable/AmbassadorNotificationsTable";

import classes from "./AmbassadorNotificationsPage.module.css"

const AmbassadorNotificationsPage = () => {    
  return (
    <div className={classes.notificationsPageBackground}>
        <AmbassadorLayout>  
          <AmbassadorNotificationsTable />
        </AmbassadorLayout>
    </div>
  );
}

export default AmbassadorNotificationsPage;