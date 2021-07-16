import styled, { css } from 'styled-components/native'
import { ButtonStyleProps } from '../../interfaces/ButtonStyle.interface'
import colors from '../../styles/colors'

const sizeVariations = {
  default: css`

  `,
  define: css`
    width: 255px;
    height: 70px;
  `
}

const paddingVariations = {
  default: css`
    padding: 10px;
  `,
  define: css`
    padding: 200px;
  `
}


export const ButtonStyle = styled.TouchableOpacity<ButtonStyleProps>`
  background-color: ${colors.roxo};
  width: 200px;
  border-radius: 15px;
  margin: 2px;
  margin-top: 30px;
  align-items: center; 
  ${(props) => sizeVariations[props.size || "default"]};
`
export const ButtonStyleText = styled.Text<ButtonStyleProps>`
  color: ${colors.white};
  font-weight: bold;
  align-items: center; 
  margin: 12px;
  font-size: 20px;
  ${(props) => paddingVariations[props.size || "default"]};
`
