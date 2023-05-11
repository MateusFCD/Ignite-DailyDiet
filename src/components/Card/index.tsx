import React from "react";
import { Container, Time, Divider, TextCard, Icon } from "./styles";

interface PropsCard {
  text: string
}

export function Card({ text }: PropsCard) {
  return (
    <Container>
      <Time>20:00</Time>
      <Divider>|</Divider>
      <TextCard>{text}</TextCard>
      <Icon weight="fill" />
    </Container>
  );
}
