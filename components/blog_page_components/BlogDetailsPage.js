"use client";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Markdown from "markdown-to-jsx";
import React from "react";

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
  maxWidth: "780px",
  width: "90%",
  height: "100%",
  margin: "0px auto",
}));

function BlogDetailsPage({ data }) {
  return (
    <Container>
      <InnerContainer>
        <Markdown>{data.content}</Markdown>
      </InnerContainer>
    </Container>
  );
}

export default BlogDetailsPage;
