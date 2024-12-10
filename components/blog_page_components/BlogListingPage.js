"use client";
import { blogs_page_context } from "@/utils/textUtils";
import { Box, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import BlogCard from "./cart_widgets/BlogCard";

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

const Heading = styled(Typography)(({ theme }) => ({
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

function BlogListingPage({ data }) {
  return (
    <Container>
      <InnerContainer>
        <Heading>{blogs_page_context.title}</Heading>
        <Grid2 container spacing={2} justifyContent="center">
          {data.map((blog, index) => {
            return (
              <Grid2 size={{ md: 3 }} key={index}>
                <BlogCard data={blog} />
              </Grid2>
            );
          })}
        </Grid2>
      </InnerContainer>
    </Container>
  );
}

export default BlogListingPage;
