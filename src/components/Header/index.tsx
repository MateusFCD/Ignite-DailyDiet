import React from "react";
import {
  BackButton,
  BackIcon,
  Container,
  Logo,
  Box,
  ImgProfile,
} from "./styles";
import { View } from "react-native";
import logoImg from "../../assets/logo.png";
import profileImg from "../../assets/Profile.png";

type Props = {
  showBackButton?: boolean;
  title?: string;
};

export function Header({ showBackButton = false, title }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Box>
        <Logo source={logoImg} />
        <ImgProfile />
      </Box>
    </Container>
  );
}
