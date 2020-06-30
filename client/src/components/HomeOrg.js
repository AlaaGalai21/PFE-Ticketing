import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.svg';

import GridItem from "../comps/Grid/GridItem.js";
import CustomTabs from "../comps/CustomTabs/CustomTabs.js";
import InfoArea from "../comps/InfoArea/InfoArea.js";
import NavbarOrg from "../components/NavbarOrg.js";

import check from "@material-ui/icons/Check";
import star from "@material-ui/icons/Star";
import thumbup from "@material-ui/icons/ThumbUp";
import Security from "@material-ui/icons/Security";
import VerifiedUser from "@material-ui/icons/VerifiedUser";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import image1 from "../assets/img/bg8.jpg";
import image2 from "../assets/img/bg9.jpg";
import image3 from "../assets/img/bg10.jpg";
import TeamSection from './TeamSection';
import Footer from "../comps/Footer/Footer.js";
import GridContainer from '../comps/Grid/GridContainer';


const styles = theme => ({
	card: {
		maxWidth: 1200,
		margin: 'auto',
		marginTop: theme.spacing.unit * 5
	},
	title: {
		padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme
			.spacing.unit * 2}px`,
		color: theme.palette.text.secondary,
		fontSize: 24
	},
	media: {
		minHeight: 450
	}
});



class Home extends Component {
	render() {
		const settings = {
			dots: true,
			fade: true,
			infinite: true,
			speed: 500,
			slideToShow: 1,
			arrows: true,
			slidesToScroll: 1,
			className: "slides",
			autoplay: true,
		}
		const { classes } = this.props;
		return (
			<div>
        <NavbarOrg />
				<GridContainer justify="center">
					<GridItem xs={14} sm={14} md={14} className={classes.marginAuto}>
				<Card className={classes.card} >
					<Typography type="headline" component="h2" className={classes.title}>
						Welcome to E-Ticketing
					</Typography>
					<CardContent>
						<div>
					<Slider {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">               
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
					className="slick-image"
					position= "absolute"
                  />
                  <div className="slick-caption">     
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption"> 
                  </div>
                </div>
              </Slider>
			  </div>
			  <GridContainer justify="center">
			  <GridItem xs={14} sm={14} md={14}>
              <h3>
                PROGRAMMES DES EVENEMENTS : NE RATEZ RIEN
              </h3>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Evenement à Venir",
                    tabIcon: check,
                    tabContent: (
                      <p className={classes.textCenter}>
                        
                      </p>
                    )
                  },
                  {
                    tabName: "Top Events",
                    tabIcon: star,
                    tabContent: (
                      <p className={classes.textCenter}>
                        
                      </p>
                    )
                  },
                  {
                    tabName: "Bon Plan",
                    tabIcon: thumbup,
                    tabContent: (
                      <p className={classes.textCenter}>
                        
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
			</GridContainer>

			<GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="PAIEMENTS"
              description="Nous vous garantissons simplicité et sécurité
              Tous les paiements qui vous sont faits figurent dans votre espace d’administration et vous en êtes reversés tous les mois. Intégralement sécurisée, notre solution vous permet de suivre l’évolution des inscriptions au jour le jour et de retrouver toutes les informations importantes pour que vous puissiez organiser votre événement sereinement."
              icon={Security}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="ACTIVITÉS"
              description="Utilisez la billetterie pour organiser tous vos événements"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>

		  <GridItem>
			  <TeamSection />
		  </GridItem>

		  
					</CardContent>
				</Card>
				</GridItem>
				</GridContainer>

				<div>
				<GridItem>
			       <Footer />
		        </GridItem>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Home);