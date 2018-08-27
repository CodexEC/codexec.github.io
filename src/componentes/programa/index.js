import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DescriptionIcon from "@material-ui/icons/PersonPinTwoTone";
import AppsIcon from "@material-ui/icons/SchoolTwoTone";
import IconConfiguraciones from "@material-ui/icons/SettingsApplicationsTwoTone";
import IconSalir from "@material-ui/icons/ExitToAppTwoTone";
import Configuraciones from "./Configuraciones";
import Cliente from "./Cliente";

function TabContainer({ children, dir }) {
  return (
    <Typography
      component="div"
      dir={dir}
      style={{ padding: "24px", marginBottom: "40px" }}
      >
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
});

class Programa extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    // console.log(this.state.value + " ESTADD");
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value: value });
    // console.log(this.state.value + "handle");
  }

  handleChangeIndex(index) {
    this.setState({ value: index });
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <Toolbar className="no-print" color="default" position="static">
          <Tabs
            centered
            fullWidth
            indicatorColor="primary"
            onChange={this.handleChange}
            textColor="primary"
            value={this.state.value}
            >
            <Tab icon={<DescriptionIcon />} />
            <Tab icon={<AppsIcon />} />
            <Tab icon={<IconConfiguraciones />} />
            <Tab component={Link} icon={<IconSalir />} to={"/"} />
          </Tabs>
        </Toolbar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          >
          <TabContainer dir={theme.direction}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <h1>Códigos</h1>
                  <Typography>
                    remite a ella. Art. 1.- La ley es una declaración de la
                    voluntad soberana que, manifestada en la forma prescrita por
                    la Constitución, manda, prohíbe o permite. Son leyes las
                    normas generalmente obligator
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Cliente />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Configuraciones tema="light" />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

Programa.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Programa);
