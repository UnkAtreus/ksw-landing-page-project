import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full" style={{ maxWidth: "1440px" }}>
      {children}
    </div>
  );
};

export default Container;
