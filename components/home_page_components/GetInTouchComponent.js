import {
  Box,
  Button,
  Grid2,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import ContactImage from "@/public/contact-us.svg";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Popup from "@/public/pop-up.json";
import { theme } from "@/utils/theme";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - 55px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    padding: `${theme.spacing(5)} 0px`,
  },
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(10)} 0px`,
  },
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1240px",
  width: "90%",
  height: "100%",
  margin: "auto",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ImageComponent = styled(Image)(({ theme }) => ({
  width: "450px",
  height: "100%",
  margin: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const Form = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(2),
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  lineHeight: "40px",
  fontWeight: 600,
  textAlign: "center",
  color: theme.palette.primary.main,
  fontFamily: "Pacifico, cursive",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(0),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
  },
}));

const Input = styled(TextField)(({ theme }) => ({}));

const SubmitBtn = styled(Button)(({ theme }) => ({}));

const LottieComponent = styled(Lottie)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Popup,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function GetInTouchComponent() {
  const [state, handleSubmit] = useForm("xovqzlkd");
  const [isHovered, setIsHovered] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const mediaQueryMatch = isClient ? matches : false;

  return (
    <Container>
      <InnerContainer>
        <Heading>Get In Touch</Heading>
        <Grid2
          container
          spacing={state.succeeded ? 0 : 4}
          direction={mediaQueryMatch && "column-reverse"}
        >
          <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
            {state.succeeded ? (
              <Stack direction="column" spacing={mediaQueryMatch ? 0 : 3}>
                <LottieComponent
                  options={defaultOptions}
                  width={mediaQueryMatch ? 200 : 500}
                  height={mediaQueryMatch ? 150 : 200}
                />
                <span>
                  <Typography
                    width="fit-content"
                    margin="auto"
                    fontSize={16}
                    fontWeight={500}
                    textAlign="center"
                  >
                    Thank you kindly.
                  </Typography>
                  <Typography
                    width="fit-content"
                    margin="auto"
                    color="#575757"
                    fontSize={14}
                    fontWeight={500}
                    textAlign="center"
                  >
                    I will get back to you soon.
                  </Typography>
                </span>
                <Typography></Typography>
              </Stack>
            ) : (
              <Form component="form" onSubmit={handleSubmit}>
                <Input required name="name" label="Name" variant="outlined" />
                <Input
                  required
                  name="subject"
                  label="Subject"
                  variant="outlined"
                />
                <Input required name="email" label="Email" variant="outlined" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Input
                  required
                  name="message"
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <SubmitBtn
                  variant={isHovered ? "contained" : "outlined"}
                  onMouseEnter={() => {
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                  type="submit"
                >
                  Submit
                </SubmitBtn>
              </Form>
            )}
          </Grid2>
          <Grid2 size={{ xs: 0, sm: 0, md: 6 }}>
            <ImageContainer>
              <ImageComponent src={ContactImage} alt="Get In Touch!" />
            </ImageContainer>
          </Grid2>
        </Grid2>
      </InnerContainer>
    </Container>
  );
}

export default GetInTouchComponent;
