import InitialLayout from "../../Components/Layout/InitialLayout";
import HomeInformation from "../../Components/HomeInformation/HomeInformation"

import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.homePageBackground}>
      <InitialLayout>
        <HomeInformation/>
      </InitialLayout>
    </div>
  );
};

export default HomePage;