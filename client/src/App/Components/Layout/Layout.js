import Header from "./Header";

import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Header links={props.passedLinks}/>
      
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;