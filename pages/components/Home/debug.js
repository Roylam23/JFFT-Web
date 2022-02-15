import React from "react";

const Debug = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        width: "80vw",
        height: "80vh",
        flexDirection: "column",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#000",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 300,
      }}
    >
      {props.info}
    </div>
  );
};

export default Debug;
