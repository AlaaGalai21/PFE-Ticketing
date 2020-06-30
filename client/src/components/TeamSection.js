import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../comps/Grid/GridContainer.js";
import GridItem from "../comps/Grid/GridItem.js";
import Button from "../comps/CustomButtons/Button.js";
import Card from "../comps/Card/Card.js";
import CardBody from "../comps/Card/CardBody.js";
import CardFooter from "../comps/Card/CardFooter.js";

import styles from "../assets/jss/material-kit-react/imagesStyles.js";

import team1 from "../assets/img/bg11.jpg";
import team2 from "../assets/img/bg12.jpg";
import team3 from "../assets/img/faces/bg13.jpg";
import { FormatSize } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const heading = {
    color : 'black',
    fontSize : '20px'
  }
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Comment ça marche ?</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Créez votre compte
                <br />
                <small className={classes.smallTitle}>1ére Etape</small>
              </h4>
              <CardBody>
                <p className={classes.description} style={heading}>
                Inscrivez vous gratuitement et en quelques clics.
                 Accédez ensuite à l’espace de votre profil.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Lancez votre Evenement
                <br />
                <small className={classes.smallTitle}>2éme Etape</small>
              </h4>
              <CardBody >
                <p className={classes.description} style={heading} >
                Créez un Evenement, un appel au don.
                 Le tout facilement et sans connaissances particulières en informatique.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Diffusez votre evenement
                <br />
                <small className={classes.smallTitle}>3éme Etape</small>
              </h4>
              <CardBody>
                <p className={classes.description} style={heading}>
                Partagez votre evenement à vos contacts et sur les réseaux sociaux.
                 Vous pouvez aussi directement l’intégrer sur votre site.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}