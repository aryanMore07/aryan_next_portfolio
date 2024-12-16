"use client";
import { footer_context } from "@/utils/textUtils";
import {
  Box,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import { theme } from "@/utils/theme";

const Container = styled(Box)(({ theme, ishomepage }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1240px",
  width: "90%",
  height: "70px",
  margin: "0px auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Heading = styled(Typography)(({ theme, ishomepage }) => ({
  fontSize: "24px",
  fontWeight: 400,
  lineHeight: "32px",
  fontFamily: "Pacifico, cursive",
  color: "#fff",
  textWrap: "nowrap",
  cursor: "pointer",
  margin: "0px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

const MiddleText = styled(Typography)(({ theme, ishomepage }) => ({
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: "26px",
  color: "#000",
  margin: "0px",
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const SocialLinksContainer = styled(Box)(({ theme }) => ({
  width: "fit-content",
  height: "100%",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(2),
  },
}));

const IconButtonComponent = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "0px",
  },
}));

const iconsStyles = { color: "#fff", fontSize: "20px" };

function Footer() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  const renderIcons = (text) => {
    if (text === "LinkedIn") {
      return <LinkedInIcon style={iconsStyles} />;
    } else if (text === "X (Formerly Twitter)") {
      return <XIcon style={iconsStyles} />;
    } else if (text === "Github") {
      return <GitHubIcon style={iconsStyles} />;
    } else {
      return <MailIcon style={iconsStyles} />;
    }
  };

  return (
    <Container>
      <InnerContainer>
        <Heading
          onClick={() => {
            router.push("/");
          }}
        >
          {footer_context.title}
        </Heading>
        <MiddleText>{footer_context.middle_text}</MiddleText>
        <SocialLinksContainer>
          {footer_context.social_links.map((data) => {
            return (
              <Tooltip title={data.text} key={data._id}>
                <IconButtonComponent
                  disableRipple={isSmallScreen}
                  onClick={() => {
                    router.push(data.path);
                  }}
                >
                  {renderIcons(data.text)}
                </IconButtonComponent>
              </Tooltip>
            );
          })}
        </SocialLinksContainer>
      </InnerContainer>
    </Container>
  );
}

export default Footer;
