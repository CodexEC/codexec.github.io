import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";


const footerEstilos = theme => ({
  pie: {
    padding: "4px",
    position: "fixed",
    display: "flex",
    justifyContent: "flex-end",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.63)",
    color:
      theme.palette.type === "light"
        ? theme.palette.primary.dark
        : theme.palette.primary.main
  },
  aire: {
    padding: "0 7px 0 7px"
  }
});

class Footer extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <footer>
        <div className={classes.pie}>
          <Typography className={classes.aire} color="primary">
            &copy; 2018 CodEXEC
          </Typography>
          <Typography className={classes.aire} color="primary">
            Términos de Uso
          </Typography>
          <Typography className={classes.aire} color="primary">
            Privacidad y Cookies
          </Typography>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerEstilos)(Footer);
