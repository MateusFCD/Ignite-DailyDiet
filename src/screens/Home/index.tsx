import React, { useState } from "react";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Porcentagem } from "../../components/Porcentagem";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { SectionList, Text } from "react-native";

export function Home() {
  const [meal, setMeal] = useState([
    {
      title: "20.06.23",
      data: ["X-tudo", "Pizza"],
    },
  ]);

  return (
    <Container>
      <Header />
      <Porcentagem />
      <Button />

      <SectionList
        sections={meal}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
        renderItem={({ item }) => <Card text={item} />}
      />
    </Container>
  );
}
