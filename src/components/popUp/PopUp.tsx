import React from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const PopUp = () => {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  const styleModalCenter = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 350,
    borderRadius: 3,
    backgroundColor: "#fff",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={styleModalCenter}>
      <Box
        display={"flex"}
        sx={{
          height: 80,
          borderBottom: "1px solid #e6e6e6",
        }}
      >
        <SearchIcon
          color={"primary"}
          sx={{
            width: 56,
            height: 56,
            marginTop: 2,
          }}
        />
        <Autocomplete
          sx={{
            width: "90%",
            marginTop: 2,
          }}
          disablePortal
          options={top100Films}
          renderInput={(params) => (
            <TextField {...params} variant={"outlined"} label="Search" />
          )}
        />
      </Box>
    </Box>
  );
};
