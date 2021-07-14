import { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

import axios from "axios";

const InitialRoute = ({ component: Component, ...restOfProps }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [doRedirectToAdmin, setDoRedirectToAdmin] = useState(true);
    const [doRedirectToAmbassador, setDoRedirectToAmbassador] = useState(true);

    // const authenticationCheck = () => {
    //     axios.get(`/authentication/check-admin-token/`)
    //     .then((response) => {
            
    //        console.log(response);
 
    //       if(response.status === 200){
    //         setIsLoading(false);
    //       } else {
    //         throw new Error("There was a problem");

    //       }
    //     }).catch((err) => {
    //         console.log(err)

    //         setDoRedirectToAdmin(false);

    //         axios.get("/authentication/check-ambassador-token/")
    //             .then((newResponse) => {
    //                 console.log(newResponse);
                    
    //                 if(newResponse.status === 200){
    //                     setIsLoading(false);
    //                 } else {
    //                     throw new Error("There was another problem");
    //                 }
    //             }).catch((error) => {
    //                 console.log(error);

    //                 console.log("YOUOOUOUOU");

    //                 setIsLoading(false);
    //                 setDoRedirectToAmbassador(false);
    //             });
    //     });
    // };

    const authenticationCheckOne = () => {
        axios.get(`/authentication/check-admin-token/`)
        .then((response) => {
            console.log(response);

          if(response.status === 200){
            setIsLoading(false);
          } else {
              throw new Error("There was a problem")
          }
        }).catch((err) => {
              console.log(err);

              setDoRedirectToAdmin(false);
          });
    }
    
    const authenticationCheckTwo = () => {
        axios.get(`/authentication/check-ambassador-token/`)
        .then((response) => {
            console.log(response);

          if(response.status === 200){
            setIsLoading(false);
          } else {
              throw new Error("There was a problem")
          }
        }).catch((err) => {
              console.log(err);

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
        console.log("Log In");
        
        return (
          <div></div>  
        );
    } else if(doRedirectToAdmin){
        console.log("Admin");

        return (
            <Route {...restOfProps} render={AdminRedirectRender} />
        );
    } else if(doRedirectToAmbassador){
        console.log("Ambassador");

        return (
            <Route {...restOfProps} render={AmbassadorRedirectRender} />
        );
    } else{
        console.log("No One");

        return (
            <Route {...restOfProps} render={correctRender} />
        );
    }
}

export default InitialRoute;