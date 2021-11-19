import React from "react";
import ReactDOM from "react-dom";
import {
  FlexBox,
  Heading,
  FullScreen,
  Progress,
  Slide,
  Deck,
  Box,
} from "spectacle";
import ImageSlide from "./components/ImageSlide";
import VideoSlide from "./components/VideoSlide";

// Images
import bloodlustImage from "./assets/images/bloodlust.jpg";
import goldblumsAnonImage from "./assets/images/GoldblumsAnonDetail.jpg";

// Videos
import allTheGoldblum from "./assets/video/all-the-goldblum-i-need.mp4";
import dogRun from "./assets/video/dog-run.mp4";
import goldblumsAnon from "./assets/video/goldblums-anonymous.m4v";
import onlineInteractions from "./assets/video/online-interactions-not-rated.m4v";
import space from "./assets/video/space.m4v";

const theme = {
  colors: {
    primary: "#af33c1",
    secondary: "#fff",
    tertiary: "#111",
  },
  fonts: {
    primary: "SF Pro Display, Segoe UI",
    secondary: "SF Pro Text",
  },
};

const template = () => (
  <FlexBox justifyContent="space-between" position="fixed" bottom={0} width={1}>
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const transition = {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
};

const Presentation = () => (
  <Deck theme={theme} template={template} transition={transition}>
    {/* Title */}
    <Slide bgColor="primary">
      <FlexBox alignContent="center" height="100%">
        <Heading size={1} caps lineHeight={1} textColor="secondary">
          Moving Pictures
        </Heading>
      </FlexBox>
    </Slide>

    {/* Dog run cycle */}
    <VideoSlide
      src={dogRun}
      title="Untitled (Dog Run Cycle)"
      videoOptions={{ loop: true }}
    />

    {/* Goldblum */}
    <VideoSlide
      src={allTheGoldblum}
      title="All The Goldblum I Need"
      videoOptions={{ loop: true }}
    />

    {/* Golblum's anonymous */}
    <ImageSlide
      src={goldblumsAnonImage}
      title="Goldblum's Anonymous Installation"
    />

    <VideoSlide
      src={goldblumsAnon}
      title="Goldblum's Anonymous"
      videoOptions={{ loop: true }}
    />

    {/* Bloodlust */}
    <ImageSlide src={bloodlustImage} title="Bloodlust Installation" />

    {/* Online interactions */}
    <VideoSlide
      src={onlineInteractions}
      title="Online Interactions Not Rated"
    />

    {/* Space */}
    <VideoSlide src={space} title="Space" />

    {/* End */}
    <Slide bgColor="primary">
      <FlexBox alignContent="center" height="100%">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          The End (So Far)
        </Heading>
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
