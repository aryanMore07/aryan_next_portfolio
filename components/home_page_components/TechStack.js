import { homepage_context } from "@/utils/textUtils";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import React from "react";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
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

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  lineHeight: "40px",
  fontWeight: 600,
  textAlign: "center",
  color: "#fff",
  fontFamily: "Pacifico, cursive",
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
    marginBottom: theme.spacing(4),
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  width: "150px",
  height: "150px",
  marginBottom: theme.spacing(2),
  backgroundColor: "#fff",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100px",
    height: "100px",
  },
}));

const Logo = styled(Image)(({ theme }) => ({
  width: "80px",
  height: "80px",
  [theme.breakpoints.down("sm")]: {
    width: "60px",
    height: "60px",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  lineHeight: "28px",
  fontWeight: 400,
  textAlign: "center",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    lineHeight: "24px",
  },
}));

function TechStack() {
  return (
    <Container>
      <InnerContainer>
        <Heading>{homepage_context.tech_stack_context.title}</Heading>
        <Grid2
          alignItems="center"
          justifyContent="center"
          container
          spacing={6}
        >
          {homepage_context.tech_stack_context.points.map((data) => {
            return (
              <Grid2 size={{ xs: 6, sm: 4, md: 3 }} key={data._id}>
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <LogoContainer>
                    <Logo src={data.image} alt={data.title} />
                  </LogoContainer>
                  <Text>{data.title}</Text>
                </Stack>
              </Grid2>
            );
          })}
        </Grid2>
      </InnerContainer>
    </Container>
  );
}

export default TechStack;
