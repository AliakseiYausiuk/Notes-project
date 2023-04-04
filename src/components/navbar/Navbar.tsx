import React from "react";
import styles from "./navbar.module.scss";
import {
  AppBar,
  Backdrop,
  Box,
  Button,
  Drawer,
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

type Anchor = "modal" | "drawer";

export const Navbar = () => {
  const [state, setState] = React.useState({
    modal: false,
    drawer: false,
  });

  const handleToggle =
    (Anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      if (Anchor === "modal") {
        setState({ ...state, modal: open });
      } else if (Anchor === "drawer") {
        setState({ ...state, drawer: open });
      }
    };

  return (
    <Box>
      <IconButton onClick={handleToggle("drawer", true)}>
        <ReorderIcon />
      </IconButton>
      <Drawer
        anchor={"left"}
        open={state["drawer"]}
        onClose={handleToggle("drawer", false)}
      >
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
              <IconButton
                color={"inherit"}
                onClick={handleToggle("drawer", false)}
              >
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
            onClick={handleToggle("modal", true)}
          >
            Search
          </Button>
          <Modal open={state["modal"]} onClose={handleToggle("modal", false)}>
            <PopUp />
          </Modal>
        </Box>
      </Drawer>
    </Box>
  );
};
