"use client";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import PageNotFound from "@/public/404.svg";
import React, { useState } from "react";
import Image from "next/image";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "calc(100vh - 55px)",
  backgroundColor: "#fff",
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  width: "70%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  [theme.breakpoints.down("lg")]: {
    width: "90%",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  rowGap: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

const ImageComponent = styled(Image)(({ theme }) => ({
  width: "400px",
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));

const GoHomeBtn = styled(Button)(({ theme }) => ({
  width: "200px",
}));

const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "34px",
  lineHeight: "42px",
  fontWeight: 500,
  textTransform: "capitalize",
  marginBottom: theme.spacing(4),
  fontFamily: "Pacifico",
  color: theme.palette.primary.main,
}));

function NotFound() {
  const [isHovered, setHovered] = useState(false);
  const router = useRouter();
  return (
    <Container>
      <InnerContainer>
        <ImageContainer>
          <ImageComponent src={PageNotFound} alt="page-not-found-image" />
        </ImageContainer>
        <Title>Page Note Found...</Title>
        <GoHomeBtn
          color="primary"
          variant={!isHovered ? "outlined" : "contained"}
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
          onClick={() => {
            router.push("/");
          }}
        >
          Go Home
        </GoHomeBtn>
      </InnerContainer>
    </Container>
  );
}

export default NotFound;
