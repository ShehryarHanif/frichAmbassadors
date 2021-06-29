import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="App">
      <h1>Project Home</h1>

      <Link to={"./ambassador/users"}>
        <button variant="raised">
            My List
        </button>
      </Link>
    </div>
  );
};

export default HomePage;