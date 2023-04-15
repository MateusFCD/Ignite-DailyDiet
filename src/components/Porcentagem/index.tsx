import React from "react";
import {BackButton, BackIcon, Container, Percent, Subtitle} from "./styles";

export function Porcentagem() {
  return (
    <Container>
        <BackButton>
            <BackIcon size={24} />
        </BackButton>
      <Percent>90,86%</Percent>
        <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
