import { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";

import { loginActions } from "../../store/loginStore";

const AmbassadorRoute = ({ component: Component, ...restOfProps }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [doRedirect, setDoRedirect] = useState(false);

    const dispatch = useDispatch();

    const authenticationCheck = () => {
        axios.get("../authentication/check-ambassador-token/")
        .then((response) => {
          if(response.status === 200){
            dispatch(loginActions.setValue(true));

            setIsLoading(false);
          } else {
              throw new Error("There was a problem");
          }
        }).catch((err) => {
              dispatch(loginActions.setValue(false));

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