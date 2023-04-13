import React from "react";
import { Box, Paper } from "@mui/material";

export const Card = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 200,
          height: 128,
        },
      }}
    >
      <Paper elevation={3} />
    </Box>
  );
};
