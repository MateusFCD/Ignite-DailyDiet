import { Circle } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 49px;
  padding: 14px 16px 14px 12px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

  background: transparent;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Time = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
`;

export const Divider = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  margin-left: 12px;
  margin-right: 12px;
`;

export const TextCard = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Icon = styled(Circle).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_LIGHT,
  size: 14,
}))``;
