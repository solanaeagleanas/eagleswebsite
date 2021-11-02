import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import "./mobile.css";
import Avatar from "@mui/material/Avatar";
import mylogo from "../Logo.png";
const drawerWidth = 170;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function MyDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }} id="myrespo">
      <CssBaseline />
      <AppBar position="fixed" open={open} id="myappbar">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
            id="menu"
          >
            <MenuIcon style={{ fill: "white" }} id="menuicon" />
          </IconButton>
          <Avatar
            alt="Remy Sharp"
            style={{
              posiiton: "absolute",
              left: "10%",
              width: "50px",
              height: "50px",
            }}
            variant="square"
            src={mylogo}
          />
          <Typography id="mylogotext2">Solana Eagles</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#fdd700",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem button onClick={handleDrawerClose}>
            <Link href="#entire">
              <Typography id="mylinks">
                <b> Home</b>
              </Typography>
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <Link href="#faqs">
              <Typography id="mylinks">
                <b> FAQs</b>
              </Typography>
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <Link href="#mydrop2">
              <Typography id="mylinks">
                <b> Roadmap</b>
              </Typography>
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <Link href="#myheading">
              <Typography id="mylinks">
                <b> About us</b>
              </Typography>
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <Link href="#bottom">
              <Typography id="mylinks">
                <b> Contact us</b>
              </Typography>
            </Link>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
export default MyDrawer;
