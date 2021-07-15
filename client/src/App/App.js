// import { Route, Switch } from "react-router-dom";

// import "./App.css";

// import HomePage from "./Pages/OtherPages/HomePage";
// import AuthenticationPage from "./Pages/OtherPages/AuthenticationPage";
// import AmbassadorUsersPage from "./Pages/Ambassador/AmbassadorUsersPage";
// import AmbassadorNotificationsPage from "./Pages/Ambassador/AmbassadorNotificationsPage";
// import ApplicationPage from "./Pages/OtherPages/ApplicationPage";
// import AdminAuthenticationPage from "./Pages/Admin/AdminAuthenticationPage";
// import AdminApplicantsPage from "./Pages/Admin/AdminApplicantsPage";
// import AdminApplicantPage from "./Pages/Admin/AdminApplicantPage";
// import AdminAmbassadorsPage from "./Pages/Admin/AdminAmbassadorsPage";
// import AdminAmbassadorPage from "./Pages/Admin/AdminAmbassadorPage";
// import AdminNotificationsPage from "./Pages/Admin/AdminNotificationsPage";

// const App = () => {
//   return (
//     <Switch>
//       <Route exact path="/" component={ HomePage }/>
//       <Route exact path="/application" component={ ApplicationPage }/>
//       <Route exact path="/authentication" component={ AuthenticationPage }/>
//       {/* <Route exact path="/ambassador" component={ AmbassadorsPage }/> */}
//       <Route exact path="/ambassador/users" component={ AmbassadorUsersPage }/>
//       <Route exact path="/ambassador/notifications" component={ AmbassadorNotificationsPage }/>
//       <Route exact path="/admin/authentication" component={ AdminAuthenticationPage }/>
//       {/* <Route exact path="/admin/main" component={ AdminMainPage }/> */}
//       <Route exact path="/admin/applicants" component={ AdminApplicantsPage }/>
//       <Route exact path="/admin/applicants/:identifier" component={ AdminApplicantPage }/>
//       <Route exact path="/admin/ambassadors" component={ AdminAmbassadorsPage }/>
//       <Route exact path="/admin/ambassadors/:identifier" component={ AdminAmbassadorPage }/>
//       <Route exact path="/admin/notifications/" component={ AdminNotificationsPage }/>
//       <Route path="*" component={ HomePage }/>
//     </Switch>
//   );
// };

// export default App;

import { Switch } from "react-router-dom";

import "./App.css";

import InitialRoute from "./Components/Routes/InitialRoute";
import AmbassadorRoute from "./Components/Routes/AmbassadorRoute";
import AdminRoute from "./Components/Routes/AdminRoute";

import HomePage from "./Pages/OtherPages/HomePage";
import AuthenticationPage from "./Pages/OtherPages/AuthenticationPage";
import AmbassadorPage from "./Pages/Ambassador/AmbassadorPage";
import AmbassadorUsersPage from "./Pages/Ambassador/AmbassadorUsersPage";
import AmbassadorNotificationsPage from "./Pages/Ambassador/AmbassadorNotificationsPage";
import ApplicationPage from "./Pages/OtherPages/ApplicationPage";
import AdminAuthenticationPage from "./Pages/Admin/AdminAuthenticationPage";
import AdminPage from "./Pages/Admin/AdminPage";
import AdminApplicantsPage from "./Pages/Admin/AdminApplicantsPage";
import AdminApplicantPage from "./Pages/Admin/AdminApplicantPage";
import AdminAmbassadorsPage from "./Pages/Admin/AdminAmbassadorsPage";
import AdminAmbassadorPage from "./Pages/Admin/AdminAmbassadorPage";
import AdminNotificationsPage from "./Pages/Admin/AdminNotificationsPage";

const App = () => {
  return (
    <Switch>
      <InitialRoute exact path="/" component={ HomePage }/>
      <InitialRoute exact path="/application" component={ ApplicationPage }/>
      <InitialRoute exact path="/authentication" component={ AuthenticationPage }/>
      <AmbassadorRoute exact path="/ambassador" component={ AmbassadorPage }/>
      <AmbassadorRoute exact path="/ambassador/users" component={ AmbassadorUsersPage }/>
      <AmbassadorRoute exact path="/ambassador/notifications" component={ AmbassadorNotificationsPage }/>
      <InitialRoute exact path="/admin-authentication" component={ AdminAuthenticationPage }/>
      <AdminRoute exact path="/admin" component={ AdminPage }/>
      <AdminRoute exact path="/admin/applicants" component={ AdminApplicantsPage }/>
      <AdminRoute exact path="/admin/applicants/:identifier" component={ AdminApplicantPage }/>
      <AdminRoute exact path="/admin/ambassadors" component={ AdminAmbassadorsPage }/>
      <AdminRoute exact path="/admin/ambassadors/:identifier" component={ AdminAmbassadorPage }/>
      <AdminRoute exact path="/admin/notifications/" component={ AdminNotificationsPage }/>
      <InitialRoute path="*" component={ HomePage }/>
    </Switch>
  );
};

export default App;