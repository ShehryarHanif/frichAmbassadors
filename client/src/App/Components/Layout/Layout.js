import Header from "./Header";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <Header imageLink={props.logoLink} links={props.passedLinks || null}/>
      
      <main className={`${classes.main} ${props.widthOverride || classes.maxWidth}`}>{props.children}</main>
    </div>
  );
};

export default Layout;