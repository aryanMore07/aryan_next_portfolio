import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CardComponent = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
  boxShadow: "none",
  border: "1px solid #dfdfdf",
  cursor: "pointer",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  marginBottom: theme.spacing(0.5),
}));

const ImageComponent = styled(Image)(({ theme }) => ({
  width: "250px",
  height: "250px",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  lineHeight: "26px",
  fontWeight: 400,
  marginBottom: theme.spacing(0.5),
  fontFamily: "Poppins",
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: 400,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  WebkitLineClamp: 2,
  textOverflow: "ellipsis",
  fontFamily: "Poppins",
}));

const BottomContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(1.5),
  paddingTop: theme.spacing(0.5),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

function BlogCard({ data }) {
  const router = useRouter();
  return (
    <CardComponent
      onClick={() => {
        router.push(`/blogs/${data.slug}`);
      }}
    >
      <ImageContainer>
        <ImageComponent
          width={1000}
          height={1000}
          style={{ width: "100%", height: "100%" }}
          src={data.image}
          atl={data.title}
        />
      </ImageContainer>
      <BottomContainer>
        <Title>{data.title}</Title>
        <Text>{data.subtitle}</Text>
      </BottomContainer>
    </CardComponent>
  );
}

export default BlogCard;
