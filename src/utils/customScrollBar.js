import React from "react";
import Scrollbar from "react-smooth-scrollbar";

function Scrollbars({ id, style, children, className }) {
  return (
    <Scrollbar
      id={id}
      className={className}
      style={style}
      continuousScrolling={true}
    >
      {children}
    </Scrollbar>
  );
}

export default Scrollbars;
