import { styled } from "@material-ui/core";
import Link from 'next/link';
import React from "react";

const SideBar = styled("div")({
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  width: 120,
  height: "100vh",
  backgroundColor: "#663399",
});

const Title = styled("h1")({
  color: "#fff",
  padding: '20px 35px',
  fontSize: 30,
  fontWeight: "bold",
});

const MainDiv = styled("div")({
  // top: 54,
});

const Menu = styled("div")({
  top: 54,
  display: "block",
  color: "#fff",
  width: 69,
  height: 57,
  left: 20,
});

const SideMenu = () => {
  return (
    <SideBar>
      <Title><Link href='/'>Gull</Link></Title>
      <Menu><Link href='/dashboard'>Dashboard</Link></Menu>
    </SideBar>
  );
};

export default SideMenu;
