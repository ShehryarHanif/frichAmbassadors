import { Link } from "react-router-dom";

import InitialLayout from "../../Components/Layout/InitialLayout";
import LogOutButton from "../../Components/Buttons/LogOutButton";

const HomePage = () => {
  return (
    <InitialLayout>
      <Link to={"./application"}>
        <button variant="raised">
            Application Page
        </button>
      </Link>

      <Link to={"./authentication"}>
        <button variant="raised">
            Ambassador's Authentication Page
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

      <Link to={"./admin/authentication"}>
        <button variant="raised">
            Admin's Authentication Page
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

      <Link to={"./admin/ambassadors/"}>
        <button variant="raised">
            Admin's Ambassadors Page
        </button>
      </Link>

      <Link to={"./admin/ambassadors/1"}>
        <button variant="raised">
            Admin's Generic Ambassador Page
        </button>
      </Link>

      <LogOutButton />
    </InitialLayout>
  );
};

export default HomePage;