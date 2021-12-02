import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BottomNavigation from "@mui/material/BottomNavigation";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
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
import falcon from "../falcon.jpg";
import griffin from "../riffin.png";
import dexter from "../dexter.jpg";
import hawk from "../hawk.jpg";
import odin from "../odin.png";
import sam from "../sam.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import CircleIcon from "@mui/icons-material/Circle";
import MyDrawer from "./MyDrawer";
import discord from "../discord.png";
import mylogo from "../Logo.png";
import solana from "../NFT.gif";
import myvideo from "../Logo.gif";
import nftcalendar from "../nftcalendar.jpeg";
const useStyles = makeStyles(() => ({
  entire: {
    backgroundColor: "#141414",
  },
  appbar: {
    backgroundColor: "black",
    color: "pink",
  },
  navlinks: {
    underline: "none",
    padding: 20,
  },
  navtext: {
    marginLeft: 25,
    color: "#fdd700",
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
  alllinks: {
    marginLeft: 50,
  },
}));

function Home() {
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

  // return focus to the button when we transitioned from !open -> open

  return (
    <div id="entire" className={classes.entire}>
      <MyDrawer />
      <Box sx={{ flexGrow: 1 }} id="websitedrawer">
        <AppBar position="static">
          <Toolbar className={classes.appbar}>
            <Avatar
              alt="Remy Sharp"
              style={{
                posiiton: "absolute",
                left: "0%",
                width: "60px",
                height: "60px",
              }}
              variant="square"
              src={mylogo}
            />
            <Typography id="mylogotext">Solana Eagles</Typography>
            <Link href="#entire" className={classes.navlinks} id="navtext">
              <Typography className={classes.navtext}>
                {" "}
                <b>Home</b>
              </Typography>
            </Link>
            <Link href="#faqs" className={classes.navlinks} id="navtext">
              <Typography className={classes.navtext}>
                <b> FAQs</b>
              </Typography>
            </Link>
            <Link href="#mydrop2" className={classes.navlinks} id="navtext">
              <Typography className={classes.navtext}>
                <b> Roadmap</b>
              </Typography>
            </Link>
            <Link href="#myheading" className={classes.navlinks} id="navtext">
              <Typography className={classes.navtext}>
                <b> About us</b>
              </Typography>
            </Link>

            <Link href="#bottom" className={classes.navlinks} id="navtext">
              <Typography className={classes.navtext}>
                <b> Contact us</b>
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      <Box>
        <Avatar alt="Remy Sharp" variant="square" src={banner} id="mybanner" />
      </Box>
      <Box>
        <Typography id="name">SOLANA EAGLES</Typography>
        <center>
          <Avatar id="solana" src={solana} variant="square" alt="solana" />
        </center>
      </Box>

      <Box className={classes.intro} id="intro" sx={{ display: "flex" }}>
        <Typography id="myintrotext">
          <Typography id="myheading">About us</Typography>
          Solana Eagle is a NFT Collection of 3,333 Unique Eagles 🦅 flying in
          the Solana Blockchain. Eagles 🦅 fly alone or with their own kind !
          We, the team of Solana Eagles wants to build a community of people who
          are of our own kind - who shares the same vision as our's, who shares
          same dream as us to fly higher. We want to grow together with this
          Community !!!
        </Typography>
        <div>
          <Avatar src={myvideo} id="myvideo" alt="video" variant="square" />
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
            How many SolanaEagles will be Minted ?
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
          The Mint price will be 0.1 SOL .
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
          Minting will take place on 15th November at 7 pm (19:00) UTC time.{" "}
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
          We recommend using Phantom{" "}
          <a href="https://phantom.app/" style={{ color: "#fdd700" }}>
            https://phantom.app/
          </a>
          , but you can also use Sollet
          <a href="https://www.sollet.io/" style={{ color: "#fdd700" }}>
            {" "}
            https://www.sollet.io/
          </a>
          . Download one of these wallet extensions for your browser. Buy SOL on
          an exchange like FTX, Binance or Coinbase and send it to your wallet's
          public address.
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
          releasing another collection for the SolanaEagles Family in the
          future. And we also plan to do a free drop for holders and setting up
          our DAO (Decentralized autonomous organization) . All details will be
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

      <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
        <Typography id="mydrop2">RoadMap</Typography>
      </Slide>

      <Box id="roadmap">
        <Box id="roadmapinside">
          <Slide direction="left" in={true} timeout={{ enter: 7000 }}>
            <Paper id="roadmapaper">
              <Typography id="roadmaptext">
                <b id="phases">PHASE 1</b>
                <br />
                <span id="phase2">
                  GETTING OUR EAGLES READY & CREATING OUR COMMUNITY{" "}
                </span>
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
                <b id="phases">PHASE 2</b>
                <br />
                <span id="phase2">GIVEAWAYS, WEBSITE TESTING </span>
              </Typography>
              <Typography id="mypoints">
                <ul>
                  <li>
                    We will be giving away 50 FREE SolanaEagles 🦅 NFT on
                    Discord for those who have our OG and Early Eagle Roles.
                    This will be a great chance to grab our NFTs Earliest than
                    others.
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
                <b id="phases">PHASE 3</b> <br />
                <span id="phase2">
                  FREE MINT, MAIN SALE , RARITY LAUNCH & MARKET PLACE LAUNCH
                </span>
              </Typography>

              <Typography id="mypoints3">
                <ul>
                  <li>
                    <b>
                      The first 500 SolanaEagles will be available for FREE
                      MINTING on 15th November 19:00 UTC on our website.More
                      details will be available on our Discord Channel !
                    </b>
                  </li>
                  <li>
                    The Remaining SolanaEagles 🦅 will be available for Mint on
                    15th November 19:00 UTC for 0.1 SOL on our Official Minting
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
                <b id="phases">PHASE 4</b> <br />
                <span id="phase2">
                  FUTURE PROJECTS , COMMUNITY DONATION, COMMUNITY WALLET
                </span>
              </Typography>

              <Typography id="mypoints4">
                <ul>
                  <li>
                    One of the main facets of the SolanaEagles is Protecting
                    those who are weaker than us, who may not have the support
                    which we have, With that in mind we will be donating 20% of
                    our Mint proceeds to an Orphanage or Old Age Home of DAOs
                    choice 💜
                  </li>
                  <li>
                    50% of mint proceeds will be deposited to our Community
                    Wallet and Our Community Wallet will be used to Reinvest in
                    our SolanaEagles Future project.
                  </li>
                  <li>
                    We have lots of exciting things planned for future. We will
                    be releasing another collection for the SolanaEagles Family
                    in the future. And we also plan to do a free drop for
                    holders and setting up our DAO (Decentralized autonomous
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
      <Box id="holder">
        <Slide direction="right" in={true} timeout={{ enter: 4000 }}>
          <Typography id="holderperks">Holder Perks</Typography>
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
      <h3 id="join">Join our discord and twitter for more updates</h3>
      <h3 id="join">
        As seen on{" "}
        <a href="https://nftcalendar.io/event/solana-eagles-1/">
          {" "}
          <center>
            <Avatar id="nftc" src={nftcalendar} variant="square" alt="solana" />
          </center>
        </a>{" "}
      </h3>

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
            src={discord}
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
