/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "../../assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const heading = {
    color : 'gray',
  }
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
            <a
                href=""
                className={classes.block}
                target="_blank"
                style={heading}
              >
                A Propos
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <a
                href=""
                className={classes.block}
                target="_blank"
                style={heading}
              >
                Billeterie
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <a
                href=""
                className={classes.block}
                target="_blank"
                style={heading}
              >
                Nos Recommendations
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <a
                href=""
                className={classes.block}
                target=""
                style={heading}
              >
                Nos Points De Ventes
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href=""
            className={aClasses}
            target="_blank"
            style={heading}
          >
            Yasser Ladib And Alaa Galai
          </a>{" "}
          for a better web.
        </div>
      </div>
    </footer>
  );
}


