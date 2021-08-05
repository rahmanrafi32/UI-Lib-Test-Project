import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { styled } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Image from "next/image";
import React from "react";
import NotificationIcon from "../../assets/icons/notification.svg";
import userAvatar from "../../assets/images/avatar.png";

const Nav = styled("div")({
  height: 120,
  padding: "0 30px",
  display: "flex",
  alignItems: "center",
  background: "inherit",
});

const NotificationGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  marginRight: 15,
});

const Search = styled("div")({
  position: "relative",
  width: 503,
  height: 50,
  borderRadius: 20,
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
});

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  color: "#B1B1B1",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: 450,
  },
}));

const NavImage = styled(Image)({
  borderRadius: 20,
});

const Navbar = () => {
  return (
    <Nav>
      <Grid container>
        <Grid item>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2, color: "#663399" }}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Grid>
        <Grid item sm></Grid>
        <NotificationGrid item >
          <Image src={NotificationIcon} alt="icon" />
        </NotificationGrid>
        <Grid item>
          <NavImage src={userAvatar} />
        </Grid>
      </Grid>
    </Nav>
  );
};

export default Navbar;
