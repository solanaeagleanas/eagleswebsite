import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BottomNavigation from "@mui/material/BottomNavigation";
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
import TwitterIcon from "@mui/icons-material/Twitter";
import Avatar from "@mui/material/Avatar";
import "./mobile.css";
import { makeStyles } from "@mui/styles";
import banner from "../banner.jpg";
import logo from "../Logo.mp4";
import falcon from "../falcon.jpg";
import griffin from "../riffin.png";
import dexter from "../dexter.jpg";
import hawk from "../hawk.jpg";
import odin from "../odin.png";
import sam from "../sam.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import CircleIcon from "@mui/icons-material/Circle";
import MyDrawer from "./MyDrawer";
const useStyles = makeStyles(() => ({
  entire: {
    backgroundColor: "#141414",
  },
  appbar: {
    backgroundColor: "#ffd700 ",
    color: "pink",

    justifyContent: "center",
  },
  navlinks: {
    underline: "hover",
    padding: 20,
  },
  navtext: {
    marginLeft: 25,
    color: "black",
  },
  intro: {
    backgroundColor: "#141414",
    padding: 40,
  },
  text: {
    width: 550,
    height: 250,
    color: "white",
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
  const [answer3, setAnswer3] = React.useState(false);
  const [answer4, setAnswer4] = React.useState(false);
  const [answer5, setAnswer5] = React.useState(false);
  const [answer6, setAnswer6] = React.useState(false);
  const [answer7, setAnswer7] = React.useState(false);
  const [answer8, setAnswer8] = React.useState(false);
  const [answer9, setAnswer9] = React.useState(false);
  const [answer10, setAnswer10] = React.useState(false);

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
  const Howmuch3 = () => {
    setAnswer3(true);
  };
  const Howmuchfalse3 = () => {
    setAnswer3(false);
  };
  const Howmuch4 = () => {
    setAnswer4(true);
  };
  const Howmuchfalse4 = () => {
    setAnswer4(false);
  };
  const Howmuch5 = () => {
    setAnswer5(true);
  };
  const Howmuchfalse5 = () => {
    setAnswer5(false);
  };
  const Howmuch6 = () => {
    setAnswer6(true);
  };
  const Howmuchfalse6 = () => {
    setAnswer6(false);
  };
  const Howmuch7 = () => {
    setAnswer7(true);
  };
  const Howmuchfalse7 = () => {
    setAnswer7(false);
  };
  const Howmuch8 = () => {
    setAnswer8(true);
  };
  const Howmuchfalse8 = () => {
    setAnswer8(false);
  };
  const Howmuch9 = () => {
    setAnswer9(true);
  };
  const Howmuchfalse9 = () => {
    setAnswer9(false);
  };
  const Howmuch10 = () => {
    setAnswer10(true);
  };
  const Howmuchfalse10 = () => {
    setAnswer10(false);
  };
  useEffect(() => {
    // Update the document title using the browser API
    document.getElementById("myvideo").play();
  }, []);

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
      <MyDrawer />
      <Box sx={{ flexGrow: 1 }} id="websitedrawer">
        <AppBar position="static">
          <Toolbar className={classes.appbar}>
            <Link href="#entire" className={classes.navlinks} id="navtext">
              <Typography className={classes.navtext}> Home</Typography>
            </Link>
            <Link href="#faqs" className={classes.navlinks} id="navtext">
              <Typography className={classes.navtext}> FAQs</Typography>
            </Link>
            <Link href="#mydrop2" className={classes.navlinks} id="navtext">
              <Typography className={classes.navtext}> Roadmap</Typography>
            </Link>
            <Link href="#myheading" className={classes.navlinks} id="navtext">
              <Typography className={classes.navtext}> About us</Typography>
            </Link>

            <Link href="#bottom" className={classes.navlinks} id="navtext">
              <Typography className={classes.navtext}> Contact us</Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      <Box>
        <Avatar alt="Remy Sharp" variant="square" src={banner} id="mybanner" />
      </Box>
      <Box className={classes.intro} id="intro" sx={{ display: "flex" }}>
        <Typography id="myintrotext">
          <Typography id="myheading" class="font-effect-neon">
            About us
          </Typography>
          Solana Eagle is a NFT Collection of 3,333 Unique Eagles 🦅 flying in
          the Solana Blockchain. Eagles 🦅 fly alone or with their own kind !
          We, the team of Solana Eagles wants to build a community of people who
          are of our own kind - who shares the same vision as our's, who shares
          same dream as us to fly higher. We want to grow together with this
          Community !!!
        </Typography>
        <div>
          <video id="myvideo" autoplay muted>
            <source src={logo} type="video/mp4" />
          </video>{" "}
        </div>
      </Box>
      <div id="faqs">
        <Slide direction="right" in={true} timeout={{ enter: 2000 }}>
          <Typography id="mydrop">FAQS</Typography>
        </Slide>
      </div>

      <Box container spacing={0} id="question1">
        <Slide direction="right" in={true} timeout={{ enter: 2000 }}>
          <Typography id="myquestion"> What is SolanaEagle? </Typography>
        </Slide>
        <Button onClick={() => handleAnswer()} id="arrow1">
          <ArrowDropDownIcon style={{ fill: "#fdd700" }} />
        </Button>

        <Button onClick={() => handleAnswerfalse()} id="arrow2">
          <ArrowDropUpIcon style={{ fill: "#fdd700" }} />
        </Button>
      </Box>
      <hr id="questionhr" />

      {answer1 ? (
        <Typography id="answers" style={{ display: "block" }}>
          The Solanaeagle is a NFT collection powered on Solana blockchain.{" "}
        </Typography>
      ) : (
        <Typography id="answers" style={{ display: "none" }}></Typography>
      )}
      <Box id="question1">
        <Slide direction="right" in={true} timeout={{ enter: 3000 }}>
          <Typography id="myquestion">
            How many SolEagles will be Minted ?
          </Typography>
        </Slide>

        <Button onClick={() => Howmuch()} id="arrow1">
          <ArrowDropDownIcon style={{ fill: "#fdd700" }} />
        </Button>

        <Button onClick={() => Howmuchfalse()} id="arrow2">
          <ArrowDropUpIcon style={{ fill: "#fdd700" }} />
        </Button>
      </Box>

      <hr id="questionhr" />
      {answer2 ? (
        <Typography id="answers" style={{ display: "block" }}>
          3,333 Unique SolanaEagles will be Minted.
        </Typography>
      ) : (
        <Typography id="answers" style={{ display: "none" }}></Typography>
      )}
      <Box id="question1">
        <Slide direction="right" in={true} timeout={{ enter: 3000 }}>
          <Typography id="myquestion">
            What is the price of minting SolanaEagle?
          </Typography>
        </Slide>

        <Button onClick={() => Howmuch3()} id="arrow1">
          <ArrowDropDownIcon style={{ fill: "#fdd700" }} />
        </Button>

        <Button onClick={() => Howmuchfalse3()} id="arrow2">
          <ArrowDropUpIcon style={{ fill: "#fdd700" }} />
        </Button>
      </Box>

      <hr id="questionhr" />
      {answer3 ? (
        <Typography id="answers" style={{ display: "block" }}>
          The Mint price will be 0.2 SOL .
        </Typography>
      ) : (
        <Typography id="answers" style={{ display: "none" }}></Typography>
      )}
      <Box id="question1">
        <Slide direction="right" in={true} timeout={{ enter: 3000 }}>
          <Typography id="myquestion">Will there be a pre-sale?</Typography>
        </Slide>

        <Button onClick={() => Howmuch4()} id="arrow1">
          <ArrowDropDownIcon style={{ fill: "#fdd700" }} />
        </Button>

        <Button onClick={() => Howmuchfalse4()} id="arrow2">
          <ArrowDropUpIcon style={{ fill: "#fdd700" }} />
        </Button>
      </Box>

      <hr id="questionhr" />
      {answer4 ? (
        <Typography id="answers4" style={{ display: "block" }}>
          No, it's a fair launch so there won't be a pre-sale but we are giving
          our 100 NFT's for giveaways and promotions.
        </Typography>
      ) : (
        <Typography id="answers" style={{ display: "none" }}></Typography>
      )}
      <Box id="question1">
        <Slide direction="right" in={true} timeout={{ enter: 3000 }}>
          <Typography id="myquestion">When is the minting?</Typography>
        </Slide>

        <Button onClick={() => Howmuch5()} id="arrow1">
          <ArrowDropDownIcon style={{ fill: "#fdd700" }} />
        </Button>

        <Button onClick={() => Howmuchfalse5()} id="arrow2">
          <ArrowDropUpIcon style={{ fill: "#fdd700" }} />
        </Button>
      </Box>

      <hr id="questionhr" />
      {answer5 ? (
        <Typography id="answers" style={{ display: "block" }}>
          Minting will take place on 11th November at 8 pm (20:00) UTC time.{" "}
        </Typography>
      ) : (
        <Typography id="answers" style={{ display: "none" }}></Typography>
      )}
      <Box id="question1">
        <Slide direction="right" in={true} timeout={{ enter: 3000 }}>
          <Typography id="myquestion">
            Where will the minting take place?
          </Typography>
        </Slide>

        <Button onClick={() => Howmuch6()} id="arrow1">
          <ArrowDropDownIcon style={{ fill: "#fdd700" }} />
        </Button>

        <Button onClick={() => Howmuchfalse6()} id="arrow2">
          <ArrowDropUpIcon style={{ fill: "#fdd700" }} />
        </Button>
      </Box>

      <hr id="questionhr" />
      {answer6 ? (
        <Typography id="answers6" style={{ display: "block" }}>
          The minting will take place on our Website. Keep an eye on the
          announcements channel for the exact link which will be provided before
          minting.
        </Typography>
      ) : (
        <Typography id="answers" style={{ display: "none" }}></Typography>
      )}
      <Box id="question1">
        <Slide direction="right" in={true} timeout={{ enter: 3000 }}>
          <Typography id="myquestion">
            What wallet can I use for the minting?
          </Typography>
        </Slide>

        <Button onClick={() => Howmuch7()} id="arrow1">
          <ArrowDropDownIcon style={{ fill: "#fdd700" }} />
        </Button>

        <Button onClick={() => Howmuchfalse7()} id="arrow2">
          <ArrowDropUpIcon style={{ fill: "#fdd700" }} />
        </Button>
      </Box>

      <hr id="questionhr" />
      {answer7 ? (
        <Typography id="answers7" style={{ display: "block" }}>
          We recommend using Phantom https://phantom.app/, but you can also use
          Sollet https://www.sollet.io/. Download one of these wallet extensions
          for your browser. Buy SOL on an exchange like FTX, Binance or Coinbase
          and send it to your wallet's public address.
        </Typography>
      ) : (
        <Typography id="answers" style={{ display: "none" }}></Typography>
      )}
      <Box id="question1">
        <Slide direction="right" in={true} timeout={{ enter: 3000 }}>
          <Typography id="myquestion">Will there be an aftermarket?</Typography>
        </Slide>

        <Button onClick={() => Howmuch8()} id="arrow1">
          <ArrowDropDownIcon style={{ fill: "#fdd700" }} />
        </Button>

        <Button onClick={() => Howmuchfalse8()} id="arrow2">
          <ArrowDropUpIcon style={{ fill: "#fdd700" }} />
        </Button>
      </Box>

      <hr id="questionhr" />
      {answer8 ? (
        <Typography id="answers8" style={{ display: "block" }}>
          Yes ! There will be Magic Eden and Digital Eyes. Also, we are in
          negotiations with others.
        </Typography>
      ) : (
        <Typography id="answers" style={{ display: "none" }}></Typography>
      )}
      <Box id="question1">
        <Slide direction="right" in={true} timeout={{ enter: 3000 }}>
          <Typography id="myquestion">
            Is there any Future plans for SolanaEagle?
          </Typography>
        </Slide>

        <Button onClick={() => Howmuch9()} id="arrow1">
          <ArrowDropDownIcon style={{ fill: "#fdd700" }} />
        </Button>

        <Button onClick={() => Howmuchfalse9()} id="arrow2">
          <ArrowDropUpIcon style={{ fill: "#fdd700" }} />
        </Button>
      </Box>

      <hr id="questionhr" />
      {answer9 ? (
        <Typography id="answers9" style={{ display: "block" }}>
          Yes! We have lots of exciting things planned for future. We will be
          releasing another collection for the SolEagle Family in the future.
          And we also plan to do a free drop for holders and setting up our DAO
          (Decentralized autonomous organization) . All details will be
          described in our roadmap very soon.
        </Typography>
      ) : (
        <Typography id="answers" style={{ display: "none" }}></Typography>
      )}
      <Box id="question1">
        <Slide direction="right" in={true} timeout={{ enter: 3000 }}>
          <Typography id="myquestion">How can I help SolanaEagles?</Typography>
        </Slide>

        <Button onClick={() => Howmuch10()} id="arrow1">
          <ArrowDropDownIcon style={{ fill: "#fdd700" }} />
        </Button>

        <Button onClick={() => Howmuchfalse10()} id="arrow2">
          <ArrowDropUpIcon style={{ fill: "#fdd700" }} />
        </Button>
      </Box>

      <hr id="questionhr" />
      {answer10 ? (
        <Typography id="answers" style={{ display: "block" }}>
          Tell your friends about SolanaEagles, help us spread further and talk
          about your ideas on the #💡suggestions on our Discord channel.
        </Typography>
      ) : (
        <Typography id="answers" style={{ display: "none" }}></Typography>
      )}
      <Box id="holder">
        <Slide direction="right" in={true} timeout={{ enter: 4000 }}>
          <Typography id="mydrop">Holder Perks</Typography>
        </Slide>
        <List>
          <Slide direction="right" in={true} timeout={{ enter: 5000 }}>
            <ListItem id="listbody">
              <CircleIcon id="iconn" style={{ fill: "#fdd700" }} />
              <Typography id="listtext">Community Giveaways</Typography>
            </ListItem>
          </Slide>
          <Slide direction="right" in={true} timeout={{ enter: 6000 }}>
            <ListItem id="listbody">
              <CircleIcon id="iconn" style={{ fill: "#fdd700" }} />

              <Typography id="listtext">
                Surprise Airdrop of our Future 3D NFTs
              </Typography>
            </ListItem>
          </Slide>

          <Slide direction="right" in={true} timeout={{ enter: 7000 }}>
            <ListItem id="listbody">
              <CircleIcon id="iconn" style={{ fill: "#fdd700" }} />
              <Typography id="listtext">
                Royalty shares(20% will be airdropped to holders of unlisted
                Eagles)
              </Typography>
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
              <Typography id="roadmaptext">
                <b>PHASE 1</b> -- GETTING OUR EAGLES READY & CREATING OUR
                COMMUNITY :
              </Typography>

              <Typography id="mypoints">
                <ul>
                  <li>
                    Our goal at Solana Eagles is to bring high quality Artwork
                    that the community loves. We want to do our part to
                    strengthen the Solana community.
                  </li>
                  <li>
                    We believe that a Strong and Engaging community is the
                    backbone of every great project and truly we think without
                    our members we won't be able to accomplish our goals. For
                    SolanaEagles your Opinions and Feedback will be the utmost
                    Priority{" "}
                  </li>
                </ul>
              </Typography>
            </Paper>
          </Slide>
        </Box>
        <Box id="roadmapinside">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaper">
              <Typography id="roadmaptext">
                <b>PHASE 2</b> -- GIVEAWAYS, WEBSITE TESTING :
              </Typography>
              <Typography id="mypoints">
                <ul>
                  <li>
                    We will be giving away 50 FREE SolEagle 🦅 NFT on Discord
                    for those who have our OG and Early Eagle Roles. This will
                    be a great chance to grab our NFTs Earliest than others.
                  </li>
                  <li>
                    We will be Testing our Official Minting Website because The
                    Mint sets the stage for the entire lifecycle of an NFT
                    Collection ! A Smooth and Seamless Minting Experience is a
                    must.
                  </li>
                  <li>
                    Site crashes or failed transactions can ruin community
                    sentiment . Therefore, we are emphasizing High traffic
                    stress testing on our Mint site prior to Launch !!
                  </li>
                </ul>
              </Typography>
            </Paper>
          </Slide>
        </Box>
        <Box id="roadmapinside">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaper">
              <Typography id="roadmaptext">
                <b>PHASE 3</b> -- FREE MINT, MAIN SALE , RARITY LAUNCH & MARKET
                PLACE LAUNCH
              </Typography>

              <Typography id="mypoints3">
                <ul>
                  <li>
                    The first 500 SolEagles will be available for FREE MINTING
                    on 12th November 18:00 UTC on our website.More details will
                    be available on our Discord Channel !
                  </li>
                  <li>
                    The Remaining SolEagles 🦅 will be available for Mint on
                    12th November 20:00 UTC for 0.2 SOL on our Official Minting
                    Website.
                  </li>
                  <li>
                    Traits rarity will be published after the Public Mint.
                  </li>
                  <li>Integration with all major Solana marketplaces.</li>
                  <li>
                    Our team is also hard at work Securing partnerships with
                    secondary Marketplaces, so that the transition from Mint to
                    Market is Effortless and Untroubled 🤝
                  </li>
                </ul>
              </Typography>
            </Paper>
          </Slide>
        </Box>
        <Box id="roadmapinside">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaper">
              <Typography id="roadmaptext">
                <b>PHASE 4</b> -- FUTURE PROJECTS , COMMUNITY DONATION,
                COMMUNITY WALLET
              </Typography>

              <Typography id="mypoints4">
                <ul>
                  <li>
                    One of the main facets of the SolEagle is Protecting those
                    who are weaker than us, who may not have the support which
                    we have, With that in mind we will be donating 20% of our
                    Mint proceeds to an Orphanage or Old Age Home of DAOs choice
                    💜
                  </li>
                  <li>
                    50% of mint proceeds will be deposited to our Community
                    Wallet and Our Community Wallet will be used to Reinvest in
                    our SolEagle Future project.
                  </li>
                  <li>
                    We have lots of exciting things planned for future. We will
                    be releasing another collection for the SolEagle Family in
                    the future. And we also plan to do a free drop for holders
                    and setting up our DAO (Decentralized autonomous
                    organization){" "}
                  </li>
                  <li>
                    All details will be described in our ROADMAP 2.0 very soon.
                  </li>
                </ul>
              </Typography>
            </Paper>
          </Slide>
        </Box>
      </Box>

      <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
        <Typography id="teams">Teams</Typography>
      </Slide>
      <Box id="roadmapteam">
        <Box id="roadmapinsideteam">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaperteam" elevation={0}>
              <Avatar
                alt="Remy Sharp"
                variant="square"
                src={falcon}
                id="eagles"
              />
              <Typography id="roadmaptextteam">
                FALCON - LEAD PROJECT DEVELOPER & CREATOR
              </Typography>
            </Paper>
          </Slide>
        </Box>
        <Box id="roadmapinsideteam">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaperteam" elevation={0}>
              <Avatar
                alt="Remy Sharp"
                variant="square"
                src={hawk}
                id="eagles"
              />
              <Typography id="roadmaptextteam">
                BLACK HAWK - CHIEF STRATEGY & CONCEPT
              </Typography>
            </Paper>
          </Slide>
        </Box>
        <Box id="roadmapinsideteam">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaperteam" elevation={0}>
              <Avatar
                alt="Remy Sharp"
                variant="square"
                src={odin}
                id="eagles"
              />
              <Typography id="roadmaptextteam">
                ODIN - LEAD DESIGNER / ARTIST
              </Typography>
            </Paper>
          </Slide>
        </Box>
        <Box id="roadmapinsideteam">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaperteam" elevation={0}>
              <Avatar
                alt="Remy Sharp"
                variant="square"
                src={griffin}
                id="eagles"
              />
              <Typography id="roadmaptextteam">
                GRIFFIN - SOCIAL MEDIA MARKETING
              </Typography>
            </Paper>
          </Slide>
        </Box>
        <Box id="roadmapinsideteam">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaperteam" elevation={0}>
              <Avatar
                alt="Remy Sharp"
                variant="square"
                src={dexter}
                id="eagles"
              />
              <Typography id="roadmaptextteam">
                DEXTER - SOCIAL MEDIA MANAGEMENT
              </Typography>
            </Paper>
          </Slide>
        </Box>
        <Box id="roadmapinsideteam">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaperteam" elevation={0}>
              <Avatar alt="Remy Sharp" variant="square" src={sam} id="eagles" />
              <Typography id="roadmaptextteam">SAM-DESIGNER</Typography>
            </Paper>
          </Slide>
        </Box>
      </Box>
      {/* 
         <Box id="roadmapinsideteam">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaper">
              <Avatar
                alt="Remy Sharp"
                variant="square"
                src={eagles}
                id="eagles"
              />
            </Paper>
          </Slide>

          <Typography id="roadmaptext">Main Sale</Typography>
        </Box>/
        <Box id="roadmapinsideteam">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaper">
              <Avatar
                alt="Remy Sharp"
                variant="square"
                src={eagles}
                id="eagles"
              />
              <Typography id="roadmaptext">Main Sale</Typography>
            </Paper>{" "}
          </Slide>
        </Box>
        <Box id="roadmapinsideteam">
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
        <Box id="roadmapinsideteam">
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

        <Box id="roadmapinsideteam">
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
      </Box> */}

      <BottomNavigation id="bottom">
        <a href="https://twitter.com/SolanaEagle">
          <TwitterIcon
            id="twitter"
            style={{ fill: "black", width: "40px", height: "40px" }}
          />
        </a>
        <a href="https://discord.gg/dys5zG8fWw">
          <Avatar
            alt="Remy Sharp"
            variant="square"
            id="discord"
            src="data:image/png;base64,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"
          />
        </a>
        <a href="https://instagram.com/soleagles_nft?utm_medium=copy_link">
          <InstagramIcon
            id="instagram"
            style={{ fill: "black", width: "40px", height: "40px" }}
          />
        </a>
      </BottomNavigation>
    </div>
  );
}

export default Home;
