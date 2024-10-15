"use client";
import { Box, Grid2 } from "@mui/material";
import { styled } from "@mui/material/styles";
import aryan from "/public/aryan.png";
import React from "react";
import Image from "next/image";
import bgImage from "/public/bg.png";
import { homepage_context } from "@/utils/textUtils";

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
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(5)} 0px`,
  },
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
  [theme.breakpoints.down("sm")]: {
    width: "200px",
    height: "200px",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2.5),
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const Heading = styled(Box)(({ theme }) => ({
  fontSize: "32px",
  fontFamily: "Pacifico, cursive",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
    marginBottom: theme.spacing(1.5),
  },
}));

const SubHeading = styled(Box)(({ theme }) => ({
  fontSize: "20px",
  fontFamily: "Pacifico, cursive",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(0.5),
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
    marginBottom: theme.spacing(1.5),
  },
}));

const Text = styled(Box)(({ theme }) => ({
  fontSize: "18px",
  fontFamily: "Poppins",
  color: "#000",
  lineHeight: "28px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

function TopSection() {
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
              <Heading>{homepage_context.top_section_context.title}</Heading>
              <SubHeading>
                {homepage_context.top_section_context.subtitle}
              </SubHeading>
              <Text>{homepage_context.top_section_context.description}</Text>
              <Text></Text>
            </TextContainer>
          </Grid2>
        </Grid2>
      </InnerContainer>
    </Container>
  );
}

export default TopSection;
