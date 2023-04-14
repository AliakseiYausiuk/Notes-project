import React from "react";
import { Box, ButtonGroup, IconButton, Typography } from "@mui/material";
import { Card } from "../card/Card";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const Board = () => {
  return (
    <Box
      sx={{
        width: "300px",
        height: "190px",
        backgroundColor: "#fafafa",
        borderRadius: "5px",
      }}
    >
      <Box display={"flex"}>
        <Typography
          variant={"h5"}
          align={"center"}
          sx={{
            margin: "0 0 0 10px",
          }}
        >
          Status
        </Typography>
        <ButtonGroup
          sx={{
            margin: "0 0 0 140px",
          }}
        >
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </ButtonGroup>
      </Box>
      <Card />
    </Box>
  );
};
