import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import auth from '../auth/auth-helper';
import { findUserProfile } from '../../utils/api-user.js';
import { Redirect, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import GridContainer from "../../comps/Grid/GridContainer.js";
import GridItem from "../../comps/Grid/GridItem.js";
import check from "@material-ui/icons/Check";
import star from "@material-ui/icons/Star";
import thumbup from "@material-ui/icons/ThumbUp";
import TextField from '@material-ui/core/TextField';
import CustomTabs from "../../comps/CustomTabs/CustomTabs.js";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/Person';
import Footer from "../../comps/Footer/Footer.js";



import DeleteUser from './DeleteUser';
import { card } from '../../assets/jss/material-kit-react';


const styles = theme => ({
	root: theme.mixins.gutters({
		maxWidth: 600,
		margin: 'auto',
		padding: theme.spacing.unit * 3,
		marginTop: theme.spacing.unit * 5
	}),
	title: {
		margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 2}px`,
		color: theme.palette.protectedTitle
	}
});

class Profile extends Component {
	constructor({ match }) {
		super();
		this.state = {
			user: '',
			redirectToSignin: false
		};
		this.match = match;
	}
	init = userId => {
		const jwt = auth.isAuthenticated();
		findUserProfile(
			{
				userId: userId
			},
			{ t: jwt.token }
		).then(data => {
			if (data.error) {
				this.setState({ redirectToSignin: true });
			} else {
				this.setState({ user: data });
			}
		});
	};
	componentWillReceiveProps = props => {
		this.init(props.match.params.userId);
	};
	componentDidMount = () => {
		this.init(this.match.params.userId);
	};
	render() {
		const { classes } = this.props;
		const redirectToSignin = this.state.redirectToSignin;
		if (redirectToSignin) {
			return <Redirect to="/signin" />;
		}
		return (
			<div className={classes.container}>
			<Card>
				<CardContent>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6} >
                <div className={classes.profile}>
				    <Avatar>
							<Person />
					</Avatar>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{this.state.user.name}</h3>
                    <h6>{this.state.user.email}</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>

			<GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6} >
              
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Evenement Créer",
                    tabIcon: check,
                    tabContent: (
                      <p className={classes.textCenter}>
                        
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
            </GridContainer>
			</CardContent>
			</Card>
			<Footer />
			</div>
			
		);
	}
}

export default withStyles(styles)(Profile);
