import { Link } from "react-router-dom";

import frichLogo from "../../../images/frichLogo.png";

import classes from "./Header.module.css";

const Header = (props) => {

  return (
    <header className={classes.header}>
      <Link className={classes.logo} to={props.imageLink}><img src={frichLogo} alt={"Frich Ambassadors"}/></Link>

      <nav>
        <ul>
          {props.links && props.links.map((specificLink, index) => (
            <li><Link key={index} to={specificLink["requiredPath"]}>{specificLink["requiredText"]}</Link></li>
          )
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;