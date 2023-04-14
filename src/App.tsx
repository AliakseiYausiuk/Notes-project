import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Board } from "./components/board/Board";
import { Box, Grid, Typography } from "@mui/material";

function App() {
  const styleNavbar = {
    position: "absolute" as "absolute",
    top: "1%",
    left: "1%",
  };
  return (
    <Grid className="App">
      <Grid container spacing={1}>
        <Grid
          item
          xs={1}
          sx={{
            height: "100vh",
          }}
        >
          <Navbar />
        </Grid>
        <Grid item xs={9} container spacing={3} direction={"column"}>
          <Grid item>
            <Typography variant="h1">Notes-project</Typography>
          </Grid>
          <Grid item>
            <Board />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
