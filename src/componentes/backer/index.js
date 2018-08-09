import React, { Component } from "react";
import PropTypes from "prop-types";
import "./efectos.css";
import withStyles from "@material-ui/core/styles/withStyles";

const parallaxStyle = {
  parallax: {
    position: "absolute",
    height: "100vh",
    width: "100%",
    margin: "0",
    padding: "0",
    overflow: "hidden",
    listStyleType: "none",
    zIndex: "-1"
  },
  imagenEstilo: {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    opacity: "0",
    zIndex: "1",
    padding: "0",
    margin: "0",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
};

class Backer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagenes: props.imagenes,
      efectos: ["fade", "fade", "fade"],
      currentSlide: 0
    };
    this.runSlideShow = this.runSlideShow.bind(this);
    this.autoSlideshow = this.autoSlideshow.bind(this);
  }
  componentDidMount() {
    this.runSlideShow();
  }

  runSlideShow() {
    setInterval(this.autoSlideshow, 5000);
  }

  autoSlideshow() {
    this.setState({
      currentSlide: (this.state.currentSlide + 1) % this.state.imagenes.length
    });
    console.log(this.state.currentSlide);
  }

  render() {
    const { classes, imagenes, children } = this.props;
    const { efectos, currentSlide } = this.state;

    const slideShowSlides = imagenes.map((slide, i) => {
      return (
        <li
          className={`slide ${efectos[i]} ${
            currentSlide === i ? "showing-" + efectos[i] : ""
          }`}
          key={i}
          style={{ backgroundImage: `url(${slide})` }}
        />
      );
    });

    return (
      <div>
        <ul className={classes.parallax}>{slideShowSlides}</ul>
        {children}
      </div>
    );
  }
}

Backer.propTypes = {
  classes: PropTypes.object.isRequired,
  imagenes: PropTypes.array,
  children: PropTypes.node
};

export default withStyles(parallaxStyle)(Backer);
