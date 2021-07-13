import { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

import axios from "axios";

const AmbassadorRoute = ({ component: Component, ...restOfProps }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [doRedirect, setDoRedirect] = useState(false);

    const authenticationCheck = () => {
        axios.get(`../authentication/check-ambassador-token/`)
        .then((response) => {
          if(response.status === 200){
              setIsLoading(false);
          } else {
              throw new Error("There was a problem")
          }
        }).catch((err) => {
              console.log(err);

              setIsLoading(false);
              setDoRedirect(true);
          });
    }

    useEffect(authenticationCheck, []);

    const redirectRender = () => <Redirect to="/authentication" />;

    const correctRender = (props) => <Component {...props} />;

    if(isLoading){
        return (
          <div></div>  
        );
    } else if(doRedirect){
        return (
            <Route {...restOfProps} render={redirectRender} />
        );
    } else{
        return (
            <Route {...restOfProps} render={correctRender} />
        );
    }
}

export default AmbassadorRoute;