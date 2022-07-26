import React from "react";
import Header from "../Headers";

const Layout = (props: any) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
