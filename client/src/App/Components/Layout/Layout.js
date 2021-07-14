import Header from "./Header";

import classes from "./Layout.module.css";

import LogOutButton from "../../Components/Buttons/LogOutButton";

function Layout(props) {
  return (
    <div>
      <Header imageLink={props.logoLink} links={props.passedLinks || null}/>
      
      <LogOutButton />

      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;