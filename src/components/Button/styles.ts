import styled, { css } from 'styled-components/native'
import { ButtonStyleProps } from '../../interfaces/ButtonStyle.interface'
import colors from '../../styles/colors'

const sizeVariations = {
  default: css`

  `,
  define: css`
    
    width: 255px;
  `
}

const paddingVariations = {
  default: css`
    padding: 10px;
  `,
  define: css`
    padding: 170px;
  `
}

export const ButtonStyle = styled.TouchableOpacity<ButtonStyleProps>`
  background-color: ${colors.roxo};
  width: 127px;

  border-radius: 15px;
  margin: 10px;
  margin-top: 30px;
  ${(props) => sizeVariations[props.size || "default"]};
`
export const ButtonStyleText = styled.Text<ButtonStyleProps>`
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  ${(props) => paddingVariations[props.size || "default"]};
`