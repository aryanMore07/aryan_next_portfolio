"use client";
import { Box, Grid2 } from "@mui/material";
import { styled } from "@mui/material/styles";
import aryan from "/public/aryan.png";
import React from "react";
import Image from "next/image";
import bgImage from "/public/bg.png"

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - 55px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${bgImage.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center", 
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1240px",
  width: "90%",
  height: "100%",
  margin: "auto",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const ImageComponent = styled(Image)(({ theme }) => ({
  width: "350px",
  height: "350px",
  borderRadius: "50%",
  padding: theme.spacing(5),
  backgroundImage: "linear-gradient(225deg, #800080 5%, #ffffff 95%)",
}));

const TextContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
}));

const Heading = styled(Box)(({ theme }) => ({
  fontSize: "32px",
  fontFamily: "Pacifico, cursive",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(3),
}));

const SubHeading = styled(Box)(({ theme }) => ({
  fontSize: "20px",
  fontFamily: "Pacifico, cursive",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(0.5),
}));

const Text = styled(Box)(({ theme }) => ({
  fontSize: "18px",
  fontFamily: "Poppins",
  color: "#000",
  lineHeight: "28px"
}));

function HomePageComponent() {
  return (
    <Container>
      <InnerContainer>
        <Grid2 container>
          <Grid2 item size={{ xs: 12, sm: 12, md: 6 }}>
            <ImageContainer>
              <ImageComponent src={aryan} alt="aryan more" />
            </ImageContainer>
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 12, md: 6 }}>
            <TextContainer>
              <Heading>I'm Aryan More</Heading>
              <SubHeading>
                Passionate Frontend Developer | Crafting Engaging User
                Experiences
              </SubHeading>
              <Text>
                I'm a frontend developer skilled in React, Next.js, and MUI. I
                build responsive, user-friendly web applications with a focus on
                performance and usability. Check out my projects to see how I
                turn creative ideas into seamless digital experiences!
              </Text>
              <Text></Text>
            </TextContainer>
          </Grid2>
        </Grid2>
      </InnerContainer>
    </Container>
  );
}

export default HomePageComponent;
