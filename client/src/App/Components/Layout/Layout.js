import Header from "./Header";

import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Header imageLink={props.logoLink} links={props.passedLinks || null}/>
      
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;