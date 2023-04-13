import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Board } from "./components/board/Board";
import { Box } from "@mui/material";

function App() {
  const styleNavabr = {
    position: "absolute" as "absolute",
    top: "1%",
    left: "1%",
  };
  return (
    <Box
      className="App"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        padding: "0 20%",
      }}
    >
      <Box sx={styleNavabr}>
        <Navbar />
      </Box>
      <Board />
    </Box>
  );
}

export default App;
