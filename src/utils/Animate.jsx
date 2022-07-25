import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
// https://czaplinski.io/blog/super-easy-animation-with-react-hooks/

/**
 * Allow animation to run before component is unmounted
 * @function AnimateComponent
 * @param {boolean} show: whether to show component or not
 * @param {object/array} children: component to be animated
 * @param {string} classType: adds a class, to change styling depending oon use case
 * @param {string} animateIn: keyframe name to use to animate IN the component
 * @param {string} animateOut: keyframe name to use to animate OUT the component
 */
const AnimateComponent = ({ show, children, classType, animateIn, animateOut }) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    render && (
      <div className={`${classType}`}
        style={{
          animation: `${show ? `${animateIn}`: `${animateOut}`} 0.5s ease-out both`,
        }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default AnimateComponent;

// Prototypes
AnimateComponent.propTypes = {
	show: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  classType: PropTypes.string,
  animateIn: PropTypes.string,
  animateOut: PropTypes.string,
};
