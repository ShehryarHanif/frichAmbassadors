import AmbassadorLayout from "../../Components/Layout/AmbassadorLayout";
import AmbassadorInformation from "../../Components/InitialInformation/AmbassadorInformation";

import classes from "./AmbassadorPage.module.css";

const AmbassadorPage = () => {    
  return (
    <div className={classes.homePageBackground}>
      <AmbassadorLayout>
        <AmbassadorInformation />
      </AmbassadorLayout>
    </div>
  );
}

export default AmbassadorPage;