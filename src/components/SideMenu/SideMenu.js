import { styled } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconPaper from "../../assets/icons/Combined Shape 2.svg";
import IconAcc from "../../assets/icons/Combined Shape 3.svg";
import IconWeather from "../../assets/icons/Combined Shape 4.svg";
import IconVault from "../../assets/icons/Combined Shape 5.svg";
import IconGallery from "../../assets/icons/Combined Shape 6.svg";
import IconTouch from "../../assets/icons/Combined Shape(1).svg";
import IconFile from "../../assets/icons/Combined Shape-1.svg";
import IconTable from "../../assets/icons/Combined Shape.svg";
import IconDash from "../../assets/icons/Group 25.svg";

const SideBar = styled("div")({
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  width: "6.25vw",
  height: "100vh",
  backgroundColor: "#663399",
});

const Title = styled("h1")({
  color: "#fff",
  fontWeight: "bold",
  height: "8vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const NavLinks = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 5,
});

const Menu = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  color: "#fff",
});

const SideMenu = () => {
  return (
    <SideBar>
      <Title>
        <Link href="/">Gull</Link>
      </Title>
      <Menu>
        <NavLinks>
          <NavLinks>
            <Image src={IconDash} alt="icon" />
          </NavLinks>
          <Link href="/dashboard">Dashboard</Link>
        </NavLinks>
        <NavLinks
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px 0",
          }}
        >
          <NavLinks>
            <Image src={IconTable} alt="icon" />
          </NavLinks>
          <Link href="/dashboard">Table</Link>
        </NavLinks>
        <NavLinks
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px 0",
          }}
        >
          <NavLinks>
            <Image src={IconFile} alt="icon" />
          </NavLinks>
          <Link href="/dashboard">File</Link>
        </NavLinks>
        <NavLinks
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px 0",
          }}
        >
          <NavLinks>
            <Image src={IconPaper} alt="icon" />
          </NavLinks>
          <Link href="/dashboard">Paper</Link>
        </NavLinks>
        <NavLinks
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px 0",
          }}
        >
          <NavLinks>
            <Image src={IconTouch} alt="icon" />
          </NavLinks>
          <Link href="/dashboard">Touch</Link>
        </NavLinks>
        <NavLinks
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px 0",
          }}
        >
          <NavLinks>
            <Image src={IconAcc} alt="icon" />
          </NavLinks>
          <Link href="/dashboard">Account</Link>
        </NavLinks>

        <NavLinks
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px 0",
          }}
        >
          <NavLinks>
            <Image src={IconWeather} alt="icon" />
          </NavLinks>
          <Link href="/dashboard">Weather</Link>
        </NavLinks>
        <NavLinks
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px 0",
          }}
        >
          <NavLinks>
            <Image src={IconGallery} alt="icon" />
          </NavLinks>
          <Link href="/dashboard">Gallery</Link>
        </NavLinks>
        <NavLinks
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px 0",
          }}
        >
          <NavLinks>
            <Image src={IconVault} alt="icon" />
          </NavLinks>
          <Link href="/dashboard">Vault</Link>
        </NavLinks>
      </Menu>
    </SideBar>
  );
};

export default SideMenu;
