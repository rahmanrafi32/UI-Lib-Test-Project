import { styled } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SidebarItems from "./SidebarConfig";

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
  justifyContent: "center",
  margin:'5px 0',
  height: '7vh',
  width: '5vw',
  borderRadius: 5,
  "&:hover": {
    backgroundColor: "#7D48B4",
  }
});

const Menu = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  color: "#fff",
});

const LinkTitle = styled("div")({
  fontSize: 14,
  lineHeight: 1.5,
});

const SideMenu = () => {
  const [active, setActive] = useState({
    activeClass: null,
    items: SidebarItems,
  });

  const toggleActive = (index) => {
    setActive({ ...active, activeClass: active.items[index] });
    console.log(active.activeClass);
  };

  const setActiveStyle = (index) => {
    if (active.items[index] === active.activeClass) return "block";
    else return "none";
  };

  const activeBackground = (index) => {
    if (active.items[index] === active.activeClass) return "#7D48B4";
    else return "#663399";
  };

  return (
    <SideBar>
      <Title>
        <Link href="/">Gull</Link>
      </Title>
      <Menu>
        {SidebarItems.map((item, index) => (
          <Link href={item.path} key={index} passHref>
            <NavLinks
              onClick={() => toggleActive(index)}
              sx={{ backgroundColor: activeBackground(index) }}
            >
              <Image src={item.icon} alt="icon" />
              <LinkTitle sx={{ display: setActiveStyle(index) }}>
                {item.title}
              </LinkTitle>
            </NavLinks>
          </Link>
        ))}
      </Menu>
    </SideBar>
  );
};

export default SideMenu;
