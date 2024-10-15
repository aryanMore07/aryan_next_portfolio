"use client";
import { projectpage_context } from "@/utils/textUtils";
import { Box, Grid2 } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import ProjectCard from "./card_widgets/ProjectCard";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - 55px)",
  display: "flex",
  padding: `${theme.spacing(5)} 0px`,
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(5)} 0px`,
  },
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1240px",
  width: "90%",
  height: "100%",
  margin: "0px auto",
}));

const Heading = styled(Box)(({ theme }) => ({
  fontSize: "32px",
  fontFamily: "Pacifico, cursive",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(3),
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
    marginBottom: theme.spacing(1.5),
  },
}));

function ProjectPage() {
  return (
    <Container>
      <InnerContainer>
        <Heading>{projectpage_context.title}</Heading>
        <Grid2 container spacing={2}>
          {projectpage_context.points.map((data) => {
            return (
              <Grid2 key={data._id} size={{ md: 4 }}>
                <ProjectCard data={data} />
              </Grid2>
            );
          })}
        </Grid2>
      </InnerContainer>
    </Container>
  );
}

export default ProjectPage;
