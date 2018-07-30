import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DescriptionIcon from "@material-ui/icons/Description";
import AppsIcon from "@material-ui/icons/Apps";
import CodeSharpIcon from "@material-ui/icons/CodeSharp";

function TabContainer({ children, dir }) {
  return (
    <Typography
      component="div"
      dir={dir}
      style={{ padding: "0 24px", marginBottom: "40px" }}
      >
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string
};

const styles = {
  root: {
    flexGrow: 1
  }
};

class Programa extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    console.log(this.state.value + " ESTADD");
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value: value });
    console.log(this.state.value + "handle");
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar color="default" position="static">
          <Tabs
            centered
            indicatorColor="primary"
            onChange={this.handleChange}
            scrollButtons="auto"
            textColor="primary"
            value={this.state.value}
            >
            <Tab icon={<DescriptionIcon />} label="clientes" />
            <Tab icon={<AppsIcon />} label="códigos" />
            <Tab icon={<CodeSharpIcon />} label="config" />
          </Tabs>
        </AppBar>
        <div>
          {this.state.value === 0 && (
            <TabContainer>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <h1>Clientes</h1>
                    <p>Art. 1.- La ley es una declaración de la voluntad soberana
                    que, manifestada en la forma prescrita por la Constitución,
                    manda, prohíbe o permite. Son leyes las normas generalmente
                    obligatorias de interés común. Art. 2.- La costumbre no
                    constituye derecho sino en los casos en que la ley se remite
                    a ella.</p>
                  </Paper>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Paper className={classes.paper}>
                    xs=12 sm=6 Art. 1.- La ley es una declaración de la voluntad
                    soberana que, manifestada en la forma prescrita por la
                    Constitución, manda, prohíbe o permite. Son leyes las normas
                    generalmente obligatorias de interés común. Art. 2.- La
                    costumbre no constituye derecho sino en los casos en que la
                    ley se remite a ella.
                  </Paper>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <Paper className={classes.paper}>
                    xs=6 sm=3 Art. 1.- La ley es una declaración de la voluntad
                    soberana que, manifestada en la forma prescrita por la
                    Constitución, manda, prohíbe o permite. Son leyes las normas
                    generalmente obligatorias de interés común. Art. 2.- La
                    costumbre no constituye derecho sino en los casos en que la
                    ley se remite a ella. Art. 1.- La ley es una declaración de
                    la voluntad soberana que, manifestada en la forma prescrita
                    por la Constitución, manda, prohíbe o permite. Son leyes las
                    normas generalmente obligatorias de interés común. Art. 2.-
                    La costumbre no constituye derecho sino en los casos en que
                    la ley se remite a ella.
                  </Paper>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
              </Grid>
            </TabContainer>
          )}
          {this.state.value === 1 &&
            <TabContainer>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <h1>Códigos</h1>
                    <Typography>
                    remite a ella. Art. 1.- La ley es una declaración de
                    la voluntad soberana que, manifestada en la forma prescrita
                    por la Constitución, manda, prohíbe o permite. Son leyes las
                    normas generalmente obligator
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </TabContainer>
          }
          {this.state.value === 2 && <TabContainer>Configs</TabContainer>}
        </div>
      </div>
    );
  }
}

Programa.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  value: PropTypes.number
};

export default withStyles(styles, { withTheme: true })(Programa);
