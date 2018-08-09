import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
// TODO: verificar propiedad style no inyecta al DOM

const parallaxStyle = {
  parallax: {
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed"
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  }
};

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    var windowScrollTop = window.pageYOffset / 3;
    this.state = {
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    };
    this.resetTransform = this.resetTransform.bind(this);
  }
  componentDidMount() {
    this.resetTransform();
    window.addEventListener("scroll", this.resetTransform);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.resetTransform);
  }
  resetTransform() {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    });
  }
  // DEBUG:parallax debe recibir la propiedad si habilita ono parallax
  render() {
    const { transform } = this.state;
    const { classes, filter, children, image, small, style } = this.props;
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small
    });
    return (
      <div
        className={parallaxClasses}
        ref="parallax"
        style={{
          backgroundImage: "url(" + image + ")",
          style,
          transform
        }}
        >
        {children}
      </div>
    );
  }
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
  image: PropTypes.string,
  small: PropTypes.bool
};

export default withStyles(parallaxStyle)(Parallax);
