import { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";

import { loginActions } from "../../store/loginStore";

const InitialRoute = ({ component: Component, specialRedirect, ...restOfProps }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [doRedirectToAdmin, setDoRedirectToAdmin] = useState(true);
    const [doRedirectToAmbassador, setDoRedirectToAmbassador] = useState(true);

    const dispatch = useDispatch();

    const authenticationCheckOne = () => {
        axios.get("/authentication/check-admin-token/")
        .then((response) => {
            console.log(response);

          if(response.status === 200){
            dispatch(loginActions.setValue(true));

            setIsLoading(false);
          } else {
              throw new Error("There was a problem")
          }
        }).catch((err) => {
            dispatch(loginActions.setValue(false));

            setDoRedirectToAdmin(false);
          });
    }
    
    const authenticationCheckTwo = () => {
        axios.get("/authentication/check-ambassador-token/")
        .then((response) => {
            console.log(response);

          if(response.status === 200){
            dispatch(loginActions.setValue(true));

            setIsLoading(false);
          } else {
              throw new Error("There was a problem")
          }
        }).catch((err) => {
            dispatch(loginActions.setValue(false));

            setDoRedirectToAmbassador(false);
            setIsLoading(false);
          });
    }
        
    useEffect(() => {
        const authenticationChecks = async () => {
            await authenticationCheckOne();
            await authenticationCheckTwo();
        }

        authenticationChecks();
    }, []);

    const AdminRedirectRender = () => <Redirect to="/admin" />;

    const AmbassadorRedirectRender = () => <Redirect to="/ambassador" />;

    const correctRender = (props) => <Component {...props} />;

    if(isLoading){        
        return (
          <div></div>  
        );
    } else if(doRedirectToAdmin && specialRedirect !== true){
        return (
            <Route {...restOfProps} render={AdminRedirectRender} />
        );
    } else if(doRedirectToAmbassador){
        return (
            <Route {...restOfProps} render={AmbassadorRedirectRender} />
        );
    } else{
        return (
            <Route {...restOfProps} render={correctRender} />
        );
    }
}

export default InitialRoute;