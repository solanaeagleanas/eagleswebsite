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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Slide from "@mui/material/Slide";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import TwitterIcon from "@mui/icons-material/Twitter";

import Avatar from "@mui/material/Avatar";
import "./mobile.css";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles(() => ({
  entire: {
    backgroundColor: "white",
  },
  appbar: {
    backgroundColor: "#E327A1",
    color: "pink",

    justifyContent: "center",
  },
  navlinks: {
    underline: "hover",
    padding: 20,
  },
  navtext: {
    marginLeft: 25,
    color: "white",
  },
  intro: {
    backgroundColor: "white",
    padding: 40,
  },
  text: {
    width: 550,
    height: 250,
    color: "black",
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

  return (
    <div id="entire" className={classes.entire}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className={classes.appbar}>
            <Button
              ref={anchorRef}
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
        <Typography id="myintrotext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        </Typography>
        <div id="img">
          <Avatar
            alt="Remy Sharp"
            variant="square"
            sx={{ width: 250, height: 250 }}
            src="https://i.imgur.com/hCAc8bK.gif"
          />
        </div>
      </Box>
      <Slide direction="right" in={true} timeout={{ enter: 2000 }}>
        <Typography id="mydrop">Drop Details</Typography>
      </Slide>

      <Box container spacing={0} id="question1">
        <Slide direction="right" in={true} timeout={{ enter: 2000 }}>
          <Typography id="myquestion">When is mint ?</Typography>
        </Slide>
        <Button onClick={() => handleAnswer()} id="arrow1">
          <ArrowDropDownIcon style={{ fill: "black" }} />
        </Button>

        <Button onClick={() => handleAnswerfalse()} id="arrow2">
          <ArrowDropUpIcon style={{ fill: "black" }} />
        </Button>
      </Box>
      <hr id="questionhr" />

      {answer1 ? (
        <Typography id="answers">
          Oct. 14th at 8PM UTC // 4PM EST // 1 PM PST <hr />
        </Typography>
      ) : (
        <Typography id="answers"></Typography>
      )}
      <Box id="question1">
        <Slide direction="right" in={true} timeout={{ enter: 3000 }}>
          <Typography id="myquestion">How much ?</Typography>
        </Slide>

        <Button onClick={() => Howmuch()} id="arrow1">
          <ArrowDropDownIcon style={{ fill: "black" }} />
        </Button>

        <Button onClick={() => Howmuchfalse()} id="arrow2">
          <ArrowDropUpIcon style={{ fill: "black" }} />
        </Button>
      </Box>

      <hr id="questionhr" />
      {answer2 ? (
        <Typography id="answers">
          Hello
          <hr />
        </Typography>
      ) : (
        <Typography id="answers"></Typography>
      )}
      <Box id="holder">
        <Slide direction="right" in={true} timeout={{ enter: 4000 }}>
          <Typography id="mydrop">Holder Perks</Typography>
        </Slide>
        <List>
          <Slide direction="right" in={true} timeout={{ enter: 5000 }}>
            <ListItem id="listbody">
              <AccessTimeFilledIcon id="iconn" style={{ fill: "black" }} />
              <Typography id="listtext">Community Wallet Vote</Typography>
            </ListItem>
          </Slide>
          <Slide direction="right" in={true} timeout={{ enter: 6000 }}>
            <ListItem id="listbody">
              <AccessTimeFilledIcon id="iconn" style={{ fill: "black" }} />

              <Typography id="listtext">Discord Access</Typography>
            </ListItem>
          </Slide>

          <Slide direction="right" in={true} timeout={{ enter: 7000 }}>
            <ListItem id="listbody">
              <AccessTimeFilledIcon id="iconn" style={{ fill: "black" }} />
              <Typography id="listtext">SEALZ Merch</Typography>
            </ListItem>
          </Slide>
          <Slide direction="right" in={true} timeout={{ enter: 8000 }}>
            <ListItem id="listbody">
              <AccessTimeFilledIcon id="iconn" style={{ fill: "black" }} />
              <Typography id="listtext">Community Giveaways</Typography>
            </ListItem>
          </Slide>
          <Slide direction="right" in={true} timeout={{ enter: 9000 }}>
            <ListItem id="listbody">
              <AccessTimeFilledIcon id="iconn" style={{ fill: "black" }} />
              <Typography id="listtext">Dank MEMES</Typography>
            </ListItem>
          </Slide>
        </List>
      </Box>
      <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
        <Typography id="mydrop2">RoadMap</Typography>
      </Slide>
      <Box id="roadmap">
        <Box id="roadmapinside">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaper">
              <Typography id="roadmaptext">Main Sale</Typography>
              <Typography id="roadmaptext">
                The remaining SEALZ will be available for mint on Oct. 14th at
                8PM UTC.
              </Typography>
            </Paper>
          </Slide>
        </Box>
        <Box id="roadmapinside">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaper">
              <Typography id="roadmaptext">Main Sale</Typography>
              <Typography id="roadmaptext">
                The remaining SEALZ will be available for mint on Oct. 14th at
                8PM UTC.
              </Typography>
            </Paper>
          </Slide>
        </Box>
        <Box id="roadmapinside">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaper">
              <Typography id="roadmaptext">Main Sale</Typography>
              <Typography id="roadmaptext">
                The remaining SEALZ will be available for mint on Oct. 14th at
                8PM UTC.
              </Typography>
            </Paper>
          </Slide>
        </Box>
        <Box id="roadmapinside">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaper">
              <Typography id="roadmaptext">Main Sale</Typography>
              <Typography id="roadmaptext">
                The remaining SEALZ will be available for mint on Oct. 14th at
                8PM UTC.
              </Typography>
            </Paper>
          </Slide>
        </Box>
        <Box id="roadmapinside">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaper">
              <Typography id="roadmaptext">Main Sale</Typography>
              <Typography id="roadmaptext">
                The remaining SEALZ will be available for mint on Oct. 14th at
                8PM UTC.
              </Typography>
            </Paper>
          </Slide>
        </Box>
        <Box id="roadmapinside">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaper">
              <Typography id="roadmaptext">Main Sale</Typography>
              <Typography id="roadmaptext">
                The remaining SEALZ will be available for mint on Oct. 14th at
                8PM UTC.
              </Typography>
            </Paper>
          </Slide>
        </Box>
        <Box id="roadmapinside">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaper">
              <Typography id="roadmaptext">Main Sale</Typography>
              <Typography id="roadmaptext">
                The remaining SEALZ will be available for mint on Oct. 14th at
                8PM UTC.
              </Typography>
            </Paper>
          </Slide>
        </Box>
        <Box id="roadmapinside">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaper">
              <Typography id="roadmaptext">Main Sale</Typography>
              <Typography id="roadmaptext">
                The remaining SEALZ will be available for mint on Oct. 14th at
                8PM UTC.
              </Typography>
            </Paper>
          </Slide>
        </Box>
      </Box>
      <Box>
        <Slide direction="left" in={true} timeout={{ enter: 8000 }}>
          <Typography id="mydrop3">Now What ?</Typography>
        </Slide>
        <Typography id="nowwhat">
          We take over the world together. We decide where this goes as a
          community. For now we'll be sharing alpha in the discord and memes on
          Twitter. Jump in the discord to decide what we purchase with the
          community wallet. (SMB/THUGBIRDZ/DEGEN APE/GALACTIC GECKOS)
        </Typography>
      </Box>
      <Box id="footer">
        <Link id="twitter">
          <TwitterIcon></TwitterIcon>
        </Link>
        <Avatar
          alt="Remy Sharp"
          variant="square"
          id="discord"
          sx={{ width: 30, height: 30 }}
          src="data:image/png;base64,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"
        />
      </Box>
    </div>
  );
}

export default Home;
