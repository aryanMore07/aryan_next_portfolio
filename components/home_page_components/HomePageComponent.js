"use client";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - 55px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1240px",
  width: "90%",
  height: "55px",
  margin: "auto",
}));

function HomePageComponent() {
  return (
    <Container>
      <InnerContainer>Hello world</InnerContainer>
    </Container>
  );
}

export default HomePageComponent;
