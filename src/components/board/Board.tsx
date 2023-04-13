import React from "react";
import { Box } from "@mui/material";
import { Card } from "../card/Card";

export const Board = () => {
  return (
    <Box
      sx={{
        width: "200px",
        height: "500px",
        backgroundColor: "lightgray",
      }}
    >
      <Card />
    </Box>
  );
};
