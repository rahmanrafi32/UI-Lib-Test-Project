import { styled } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";
import SideMenu from "../SideMenu/SideMenu";

const MainDiv = styled("div")({
  paddingLeft: 120,
  background: "#F1F3F4",
  height: "100vh",
});

const Layout = ({ children }) => {
  return (
    <>
      <SideMenu />
      <MainDiv>
        <Navbar />
        <main>{children}</main>
      </MainDiv>
    </>
  );
};

export default Layout;
