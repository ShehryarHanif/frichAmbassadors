import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./Pages/OtherPages/HomePage/HomePage.js";
import AmbassadorPage from "./Pages/Ambassador/AmbassadorPage/AmbassadorPage";
import ApplicationPage from "./Pages/OtherPages/ApplicationPage/ApplicationPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ HomePage }/>
        <Route exact path="/application" component={ ApplicationPage }/>
        {/* <Route exact path="/authentication" component={ AuthenticationPage }/> */}
        <Route exact path="/ambassador" component={ AmbassadorPage }/>
        {/* <Route exact path="/ambassador/users" component={ AmbassadorUsersPage }/>
        <Route exact path="/ambassador/users/user" component={ AmbassadorUserPage }/>
        <Route exact path="/ambassador/notifications" component={ AmbassadorNotificationsPage }/>
        <Route exact path="/admin/authentication" component={ AdminAuthenticationPage }/>
        <Route exact path="/admin/main" component={ AdminMainPage }/>
        <Route exact path="/admin/ambassadors" component={ AdminAmbassadorsPage }/>
        <Route exact path="/admin/ambassadors/:identifier" component={ AdminAmbassadorPage }/>
        <Route exact path="/admin/applicants" component={ AdminApplicantsPage }/>
        <Route exact path="/admin/applicants/:identifier" component={ AdminApplicantPage }/>
        <Route exact path="/admin/notifications/" component={ AdminNotificationsPage }/> */}
      </Switch>
    </Router>
  );
};

export default App;