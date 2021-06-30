import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./Pages/OtherPages/HomePage/HomePage.js";
import AmbassadorUsersPage from "./Pages/Ambassador/AmbassadorUsersPage/AmbassadorUsersPage";
import AmbassadorNotificationsPage from "./Pages/Ambassador/AmbassadorNotificationsPage/AmbassadorNotificationsPage";
import ApplicationPage from "./Pages/OtherPages/ApplicationPage/ApplicationPage";
import AdminApplicantsPage from "./Pages/Admin/AdminApplicantsPage/AdminApplicantsPage";
import AdminApplicantPage from "./Pages/Admin/AdminApplicantPage/AdminApplicantPage";
import AdminAmbassadorsPage from "./Pages/Admin/AdminAmbassadorsPage/AdminAmbassadorsPage";
import AdminAmbassadorPage from "./Pages/Admin/AdminAmbassadorPage/AdminAmbassadorPage";
import AdminNotificationsPage from "./Pages/Admin/AdminNotificationsPage/AdminNotificationsPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ HomePage }/>
        <Route exact path="/application" component={ ApplicationPage }/>
        {/* <Route exact path="/authentication" component={ AuthenticationPage }/> */}
        {/* <Route exact path="/ambassador" component={ AmbassadorsPage }/> */}
        <Route exact path="/ambassador/users" component={ AmbassadorUsersPage }/>
        <Route exact path="/ambassador/notifications" component={ AmbassadorNotificationsPage }/>
        {/* <Route exact path="/admin/authentication" component={ AdminAuthenticationPage }/> */}
        {/* <Route exact path="/admin/main" component={ AdminMainPage }/> */}
        <Route exact path="/admin/applicants" component={ AdminApplicantsPage }/>
        <Route exact path="/admin/applicants/:identifier" component={ AdminApplicantPage }/>
        <Route exact path="/admin/ambassadors" component={ AdminAmbassadorsPage }/>
        <Route exact path="/admin/ambassadors/:identifier" component={ AdminAmbassadorPage }/>
        <Route exact path="/admin/notifications/" component={ AdminNotificationsPage }/>
      </Switch>
    </Router>
  );
};

export default App;