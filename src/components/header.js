import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

function header() {
  return (
    <AppBar position="static">
      <Container maxWidth="full">
        <Toolbar disableGutters/>
      </Container>
    </AppBar>
  );
}
export default header;