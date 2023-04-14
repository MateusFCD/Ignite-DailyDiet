import React from "react";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Porcentagem } from "../../components/Porcentagem";

export function Home() {
  return (
    <Container>
      <Header />
      <Porcentagem />
    </Container>
  );
}
