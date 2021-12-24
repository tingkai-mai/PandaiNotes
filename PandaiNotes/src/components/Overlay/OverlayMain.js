import React, { useReducer } from "react";

const pageHandler = () => {};

const OverlayMain = (props) => {
  const [currState, changePage] = useReducer(pageHandler);
};

export default OverlayMain;
