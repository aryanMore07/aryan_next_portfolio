import { Box, Button, Card, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CardComponent = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  marginBottom: theme.spacing(1.5),
}));

const ImageComponent = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  lineHeight: "32px",
  fontWeight: 400,
}));

const BottomContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

function ProjectCard({ data }) {
  const router = useRouter();
  return (
    <CardComponent>
      <ImageContainer>
        <ImageComponent
          width={500}
          height={500}
          style={{ width: "100%", height: "auto" }}
          src={data.image}
          atl={data.title}
        />
      </ImageContainer>
      <BottomContainer>
        <Title>{data.title}</Title>
        <Grid2 container>
          <Grid2 item size={{ xs: 6, sm: 6, md: 6 }}>
            <Button
              variant="outlined"
              onClick={() => {
                router.push(data.btn_texts.live_project_btn_context.link);
              }}
            >
              {data.btn_texts.live_project_btn_context.text}
            </Button>
          </Grid2>
          <Grid2 item size={{ xs: 6, sm: 6, md: 6 }}>
            <Button
              variant="contained"
              onClick={() => {
                router.push(data.btn_texts.source_code_btn_context.link);
              }}
            >
              {data.btn_texts.source_code_btn_context.text}
            </Button>
          </Grid2>
        </Grid2>
      </BottomContainer>
    </CardComponent>
  );
}

export default ProjectCard;
