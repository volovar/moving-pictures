import React from "react";
import { Slide, Text } from "spectacle";

const VideoSlide = ({ src, title, videoOptions = {} }) => (
  <Slide bgColor="tertiary">
    <Text margin="0 0 0.6em" size={4} pt={0} textColor="secondary">
      {title}
    </Text>

    <video
      style={{ outline: "none", height: "60vh" }}
      controls
      {...videoOptions}
    >
      <source src={src} />
    </video>
  </Slide>
);

export default VideoSlide;
