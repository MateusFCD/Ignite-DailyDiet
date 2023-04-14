import React from "react";
import {
  BackButton,
  BackIcon,
  Container,
  Logo,
  Box,
  ImgProfile,
  Title,
} from "./styles";
import { ImageBackground, View } from "react-native";
import logoImg from "../../assets/logo.png";
import profileImg from "../../assets/Profile.png";

type Props = {
  showBackButton?: boolean;
  title?: string;
};

export function Header({ showBackButton = false, title }: Props) {
  return (
    <Container>
      {showBackButton ? (
        <BackButton>
          <BackIcon />
          <Title>{title}</Title>
        </BackButton>
      ) : (
        <Box>
          <Logo source={logoImg} />

          <ImgProfile source={profileImg} />
        </Box>
      )}
    </Container>
  );
}
