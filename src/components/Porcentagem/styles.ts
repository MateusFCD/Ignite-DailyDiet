import styled from "styled-components/native";

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
