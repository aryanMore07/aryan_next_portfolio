"use client";
import { navbar_context } from "@/utils/textUtils";
import {
  AppBar,
  Box,
  Button,
  Slide,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDownload } from "react-icons/md";

const Container = styled(AppBar)(({ theme }) => ({
  width: "100%",
  height: "auto",
  position: "sticky",
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1240px",
  width: "90%",
  height: "55px",
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 400,
  lineHeight: "32px",
  fontFamily: "Pacifico, cursive",
  color: "#fff",
  textWrap: "nowrap",
  cursor: "pointer",
}));

const MiddleContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(4),
}));

const DownloadBtn = styled(Button)(({ theme }) => ({
  textWrap: "nowrap",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  textTransform: "capitalize",
  "&:hover": {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
  },
}));

const LinkComponent = styled(Link)(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.secondary.main,
  fontWeight: 400,
  lineHeight: "28px",
  textDecoration: "none",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    height: "2px",
    width: "0",
    backgroundColor: theme.palette.secondary.main,
    transition: "width 0.3s ease",
  },
  "&:hover::after": {
    width: "100%",
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

function Navbar(props) {
  const router = useRouter();
  return (
    <HideOnScroll {...props}>
      <Container>
        <InnerContainer>
          <Heading
            onClick={() => {
              router.push("/");
            }}
          >
            Aryan More
          </Heading>
          <MiddleContainer>
            {navbar_context.menu_links.map((link) => {
              return (
                <LinkComponent href={link.path} key={link._id}>
                  {link.title}
                </LinkComponent>
              );
            })}
          </MiddleContainer>
          <DownloadBtn endIcon={<MdDownload />} variant="outlined">
            Download Resume
          </DownloadBtn>
        </InnerContainer>
      </Container>
    </HideOnScroll>
  );
}

export default Navbar;
