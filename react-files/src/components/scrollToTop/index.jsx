import React from "react";
import scrollToTop from "../common/scrollToTop";

const ScrollToTop = () => {
  React.useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <div className="circle-container cursor-pointer">
        <svg
          className="circle-progress svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
};

export default ScrollToTop;
