"use client";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1240px",
  width: "90%",
  height: "100%",
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 400,
  lineHeight: "32px",
  fontFamily: "Pacifico, cursive",
  color: "#fff",
  textWrap: "nowrap",
  cursor: "pointer",
}));

const MiddleText = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: "26px",
  color: "#fff",
}));

function Footer() {
  return (
    <Container>
      <InnerContainer>
        <Heading>Aryan More</Heading>
        <MiddleText>Made with 💜 in NextJs</MiddleText>
      </InnerContainer>
    </Container>
  );
}

export default Footer;
