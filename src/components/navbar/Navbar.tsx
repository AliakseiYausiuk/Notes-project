import React from "react";
import styles from "./navbar.module.scss";
import {
  AppBar,
  Backdrop,
  Box,
  Button,
  IconButton,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";
// @ts-ignore
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ReorderIcon from "@mui/icons-material/Reorder";
import { PopUp } from "../popUp/PopUp";

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box
      className={styles.navbar}
      sx={{
        width: 300,
        height: "100vh",
        backgroundColor: "#e6e6e6",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Notes
          </Typography>
          <IconButton color={"inherit"}>
            <ReorderIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Button
        startIcon={<AddIcon />}
        size={"large"}
        sx={{
          width: "100%",
        }}
      >
        Add a page
      </Button>
      <Button
        startIcon={<SearchIcon />}
        size={"large"}
        sx={{
          width: "100%",
        }}
        onClick={handleToggle}
      >
        Search
      </Button>
      <Modal open={open} onClose={handleClose}>
        <PopUp />
      </Modal>
    </Box>
  );
};
