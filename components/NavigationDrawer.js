import {
  Box,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  SwipeableDrawer,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { navbar_context } from "@/utils/textUtils";
import { useRouter } from "next/navigation";
import { theme } from "@/utils/theme";
import { footer_context } from "../utils/textUtils";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";

const Body = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100svh - 120px)",
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
}));

const Footer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "65px",
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
}));

const MenuListComponent = styled(MenuList)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const MenuItemComponent = styled(MenuItem)(({ theme }) => ({
  width: "100%",
  borderRadius: "4px",
  fontFamily: "Poppins",
  color: theme.palette.primary.light,
  padding: "8px",
  paddingLeft: 0,
}));

const SocialLinksContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
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

const iconStyles = {
  color: theme.palette.primary.main,
  fontSize: "18px",
};

function NavigationDrawer({ open, setOpen }) {
  const router = useRouter();
  const renderIcons = (text) => {
    if (text === "LinkedIn") {
      return <LinkedInIcon style={iconStyles} />;
    } else if (text === "X (Formerly Twitter)") {
      return <XIcon style={iconStyles} />;
    } else if (text === "Github") {
      return <GitHubIcon style={iconStyles} />;
    } else {
      return <MailIcon style={iconStyles} />;
    }
  };

  return (
    <SwipeableDrawer
      sx={{ "& .MuiDrawer-paper": { width: "100%", paddingTop: "55px" } }}
      anchor="right"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      onOpen={() => {
        return null;
      }}
    >
      <Body>
        <MenuListComponent>
          {navbar_context.menu_links.map((link) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                href={link.path}
                onClick={() => {
                  setOpen(false);
                }}
                key={link._id}
              >
                <MenuItemComponent>{link.title}</MenuItemComponent>
              </Link>
            );
          })}
          <MenuItemComponent
            onClick={() => {
              router.push("/#lets-connect");
              setOpen(false);
            }}
          >
            Get In Touch
          </MenuItemComponent>
          <MenuItemComponent>
            <Link
              style={{
                color: theme.palette.primary.light,
                textDecoration: "none",
              }}
              href="/files/aryan_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Link>
          </MenuItemComponent>
        </MenuListComponent>
      </Body>
      <Divider
        sx={{
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.main,
        }}
        orientation="horizontal"
      >
        Let&apos;s connect
      </Divider>
      <Footer>
        {" "}
        <SocialLinksContainer>
          {footer_context.social_links.map((data) => {
            return (
              <Tooltip title={data.text} key={data._id}>
                <IconButtonComponent
                  onClick={() => {
                    router.push(data.path);
                    setOpen(false);
                  }}
                >
                  {renderIcons(data.text)}
                </IconButtonComponent>
              </Tooltip>
            );
          })}
        </SocialLinksContainer>
      </Footer>
    </SwipeableDrawer>
  );
}

export default NavigationDrawer;
