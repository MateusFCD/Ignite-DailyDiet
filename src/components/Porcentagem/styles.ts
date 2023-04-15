import styled from "styled-components/native";
import {ArrowUpRight} from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  height: 102px;

  justify-content: center;
  align-items: center;
  margin-top: 36px;

  border-radius: 8px;
  padding: 16px 20px;

  background: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Percent = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
  align-self: flex-end;
  
`;

export const BackIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_100,
}))``;
