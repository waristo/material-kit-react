import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import {Link} from "react-router-dom";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import {Grain} from "@material-ui/icons";
import image from "../../assets/img/bg7.jpg";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CustomInput from "../../components/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import CardFooter from "../../components/Card/CardFooter";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import profileImage from "../../assets/img/faces/avatar.jpg";

// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";

import navStyles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import Navbars from "./Sections/Navbars";
const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const {...rest} = props;
  return (
    <div>
      <Navbars />
      <div
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          // backgroundColor: "black",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer>*/
            <GridItem>*/
              <div className={classes.brand}>
                <h1 className={classes.title}>gimwonbae blog.</h1>
                <h3 className={classes.subtitle}>
                  gimwonbae's love music, portfolio etc.
                </h3>
              </div>
            </GridItem>
            <GridItem>
              <SectionCarousel/>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont/>
      </div>
      {/*<Parallax image={require("assets/img/bg4.jpg")}>*/}
      {/*  <div className={classes.container}>*/}
      {/*    <GridContainer>*/}
      {/*      <GridItem>*/}
      {/*        <div className={classes.brand}>*/}
      {/*          <h1 className={classes.title}>gimwonbae blog.</h1>*/}
      {/*          <h3 className={classes.subtitle}>*/}
      {/*            gimwonbae's love music, portfolio etc.*/}
      {/*          </h3>*/}
      {/*        </div>*/}
      {/*      </GridItem>*/}
      {/*      <GridItem>*/}
      {/*        <SectionCarousel />*/}
      {/*      </GridItem>*/}
      {/*    </GridContainer>*/}
      {/*  </div>*/}
      {/*</Parallax>*/}
      {/*<div className={classNames(classes.main, classes.mainRaised)}>*/}
      {/*  <SectionBasics />*/}
      {/*  <SectionNavbars />*/}
      {/*  <SectionTabs />*/}
      {/*  <SectionPills />*/}
      {/*  <SectionNotifications />*/}
      {/*  <SectionTypography />*/}
      {/*  <SectionJavascript />*/}
      {/*  <SectionCarousel />*/}
      {/*  <SectionCompletedExamples />*/}
      {/*  <SectionLogin />*/}
      {/*  <GridItem md={12} className={classes.textCenter}>*/}
      {/*    <Link to={"/login-page"} className={classes.link}>*/}
      {/*      <Button color="primary" size="lg" simple>*/}
      {/*        View Login Page*/}
      {/*      </Button>*/}
      {/*    </Link>*/}
      {/*  </GridItem>*/}
      {/*  <SectionExamples />*/}
      {/*  <SectionDownload />*/}
      {/*</div>*/}
      {/*<Footer />*/}
    </div>
  );
}
