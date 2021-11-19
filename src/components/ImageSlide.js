import React from "react";
import { Image, Slide, Text } from "spectacle";

const ImageSlide = ({ src, title }) => (
  <Slide bgColor="tertiary">
    <Text margin="0 0 0.6rem" size={4} pt={0} textColor="secondary">
      {title}
    </Text>

    <Image
      alt="The art installation Bloodlust at Mocad. 11 computer monitors playing short clips of violent video games."
      style={{
        display: "block",
        margin: "0 auto",
        maxWidth: "74%",
        maxHeight: "80%",
      }}
      src={src}
    />
  </Slide>
);

export default ImageSlide;
