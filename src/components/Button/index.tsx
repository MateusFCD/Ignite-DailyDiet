import React from "react";
import { Container, TextButton, Icon } from "./styles";
import { Text } from "react-native";

export function Button() {
  return (
    <Container>
      <Icon />
      <TextButton>Nova refeição</TextButton>
    </Container>
  );
}
