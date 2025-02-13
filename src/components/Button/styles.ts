import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | " SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;
