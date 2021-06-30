import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="App">
      <h1>Frich Ambassadors</h1>

      <Link to={"./application"}>
        <button variant="raised">
            Application Page
        </button>
      </Link>

      <Link to={"./ambassador/users"}>
        <button variant="raised">
            Ambassador's Users Page
        </button>
      </Link>

      <Link to={"./ambassador/notifications"}>
        <button variant="raised">
            Ambassador's Notifications Page
        </button>
      </Link>

      <Link to={"./admin/applicants"}>
        <button variant="raised">
            Admin's Applicants Page
        </button>
      </Link>

      <Link to={"./admin/applicants/1"}>
        <button variant="raised">
            Admin's Generic Applicant Page
        </button>
      </Link>

      <Link to={"./admin/notifications/"}>
        <button variant="raised">
            Admin's Notifications Page
        </button>
      </Link>
    </div>
  );
};

export default HomePage;