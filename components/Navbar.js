import { AppBar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const Container = styled(AppBar)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1240px",
  width: "90%",
  height: "55px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

function Navbar() {
  return (
    <Container>
      <InnerContainer></InnerContainer>
    </Container>
  );
}

export default Navbar;
