import { Plus } from "phosphor-react-native";
import { Text } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${({ theme }) => theme.COLORS.GRAY_100};

  width: 100%;
  height: 50px;
  border-radius: 6px;

  padding: 16px 24px;
  gap: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))``;
