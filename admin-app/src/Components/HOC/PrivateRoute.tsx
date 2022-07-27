import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Route } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }:any) => {
  return (
    <Route
      {...rest}
      component={(props: any) => {
        const token = window.localStorage.getItem("token");
        if (token) {
          return <Component {...props} />;
        } else {
          return <Navigate to={"/signin"} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
