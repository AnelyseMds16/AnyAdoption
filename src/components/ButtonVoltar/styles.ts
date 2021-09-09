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
    padding: 160px;
  `
}

export const ButtonStyle = styled.TouchableOpacity<ButtonStyleProps>`
  
  width: 100px;
  flex-direction: row;
 
  border-radius: 20px;
  margin: 15px;
  padding: 20px;
  
  ${(props) => sizeVariations[props.size || "default"]};
`
export const ButtonStyleText = styled.Text<ButtonStyleProps>`
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
  width: 60%;

  font-size: 20px;
  ${(props) => paddingVariations[props.size || "default"]};
`
export const ButtonStyleImage = styled.Image`
  width: 15px;
  height: 15px;
  margin-top: 500px;
`

