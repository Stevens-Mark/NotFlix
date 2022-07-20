// https://czaplinski.io/blog/super-easy-animation-with-react-hooks/

import React, { useEffect, useState } from "react";

const Fade = ({ show, children }) => {
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
          animation: `${show ? "modalopen 0.6s ease-out both" : "modalclose 0.3s ease-out both"} `,
          // animation: `${show ? "fade" : "fadeout"} 0.6s ease-in-out both`,
          // position: "relative"
        }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default Fade;