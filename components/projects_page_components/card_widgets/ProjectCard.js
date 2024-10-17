import {
  Box,
  Button,
  Card,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";
import { theme } from "@/utils/theme";
import Tooltip from "@mui/material/Tooltip";

const CardComponent = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
  boxShadow: "none",
  border: "1px solid #dfdfdf",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  marginBottom: theme.spacing(0.5),
}));

const ImageComponent = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  lineHeight: "28px",
  fontWeight: 400,
  marginBottom: theme.spacing(0.5),
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
}));

const BottomContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(1.5),
  paddingTop: theme.spacing(0.5),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const iconStyles = {
  color: "#000",
  fontSize: "20px",
};

function ProjectCard({ data }) {
  const router = useRouter();

  const renderIcon = (context) => {
    if (context.type === "html") {
      return (
        <Tooltip title={context.text}>
          <IconButton disableRipple>
            <FaHtml5 style={iconStyles} />
          </IconButton>
        </Tooltip>
      );
    } else if (context.type === "css") {
      return (
        <Tooltip title={context.text}>
          <IconButton disableRipple>
            <FaCss3Alt style={iconStyles} />
          </IconButton>
        </Tooltip>
      );
    } else if (context.type === "javascript") {
      return (
        <Tooltip title={context.text}>
          <IconButton disableRipple>
            <IoLogoJavascript style={iconStyles} />
          </IconButton>
        </Tooltip>
      );
    } else if (context.type === "reactjs") {
      return (
        <Tooltip title={context.text}>
          <IconButton disableRipple>
            <FaReact style={iconStyles} />
          </IconButton>
        </Tooltip>
      );
    } else if (context.type === "mui") {
      return (
        <Tooltip title={context.text}>
          <IconButton disableRipple>
            <SiMui style={iconStyles} />
          </IconButton>
        </Tooltip>
      );
    } else {
      return (
        <Tooltip title={context.text}>
          <IconButton disableRipple>
            <DiBootstrap style={iconStyles} />
          </IconButton>
        </Tooltip>
      );
    }
  };

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
        <Text>{data.text}</Text>
        <Stack
          spacing={1}
          sx={{
            margin: `${theme.spacing(1.5)} 0px`,
          }}
          direction="row"
        >
          {data.tech_stacks.map((item) => renderIcon(item))}
        </Stack>
        <Grid2 container spacing={1}>
          <Grid2 item size={{ xs: 6, sm: 6, md: 6 }}>
            <Button
              sx={{ textWrap: "nowrap" }}
              fullWidth
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
              sx={{ textWrap: "nowrap" }}
              fullWidth
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
