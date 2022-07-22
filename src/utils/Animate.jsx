// https://czaplinski.io/blog/super-easy-animation-with-react-hooks/

import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

/**
 * Allow animation to run before component is unmounted
 * @function AnimateComponent
 * @param {boolean} show: whether to show component or not
 * @param {object} children: component to be animated
 * @returns 
 */
const AnimateComponent = ({ show, children }) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    render && (
      <div className="animate"
        style={{
          animation: `${show ? "modalopen 0.5s ease-out both" : "modalclose 0.5s ease-out both"} `,
          // animation: `${show ? "fade" : "fadeout"} 0.5s ease-out both`,
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
  children: PropTypes.object.isRequired,
};
