import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

import Avatar from "@mui/material/Avatar";
import "./mobile.css";
import { makeStyles, useTheme } from "@mui/styles";

const useStyles = makeStyles(() => ({
  navlinks: {
    underline: "hover",
    padding: 20,
  },
  navtext: {
    marginLeft: 25,
    color: "white",
  },
  intro: {
    backgroundColor: "red",
    padding: 40,
  },
  text: {
    width: 550,
    height: 250,
  },
  img: {
    marginLeft: 100,
  },
  app: {
    color: "black",
  },
}));

function Home() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const classes = useStyles();
  const [answer1, setAnswer1] = React.useState(false);

  const [answer2, setAnswer2] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleAnswer = () => {
    setAnswer1(true);
  };
  const handleAnswerfalse = () => {
    console.log("In handleanswers false");
    setAnswer1(false);
  };
  const Howmuch = () => {
    setAnswer2(true);
  };
  const Howmuchfalse = () => {
    setAnswer2(false);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  let button;

  return (
    <div id="entire">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="info">
          <Toolbar>
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              id="menu"
            >
              <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon style={{ fill: "white" }} />
              </IconButton>
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <Link href="#" className={classes.navlinks} id="navtext">
              <Typography className={classes.navtext}> Link</Typography>
            </Link>
            <Link href="#" className={classes.navlinks} id="navtext">
              <Typography className={classes.navtext}> Link</Typography>
            </Link>
            <Link href="#" className={classes.navlinks} id="navtext">
              <Typography className={classes.navtext}> Link</Typography>
            </Link>
            <Link href="#" className={classes.navlinks} id="navtext">
              <Typography className={classes.navtext}> Link</Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Box className={classes.intro} id="intro" sx={{ display: "flex" }}>
        <Typography className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        </Typography>
        <Avatar
          alt="Remy Sharp"
          variant="square"
          sx={{ width: 250, height: 250 }}
          className={classes.img}
          src="https://i.imgur.com/hCAc8bK.gif"
        />
      </Box>
      <div id="question1">
        <Typography>When is mint ?</Typography>
        <Button onClick={() => handleAnswer()}>></Button>

        <Button onClick={() => handleAnswerfalse()}>=</Button>
      </div>
      {answer1 ? <Typography>Hello</Typography> : <Typography></Typography>}
      <div id="question1">
        <Typography>How much ?</Typography>

        <Button onClick={() => Howmuch()}>></Button>

        <Button onClick={() => Howmuchfalse()}>=</Button>
      </div>
      {answer2 ? <Typography>Hello</Typography> : <Typography></Typography>}
    </div>
  );
}

export default Home;
