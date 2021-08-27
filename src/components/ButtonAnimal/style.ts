import styled from 'styled-components/native'
import colors from '../../styles/colors' 

export const ButtonStyle = styled.TouchableOpacity`
  background-color: ${colors.roxo};
  width: 200px;
  border-radius: 15px;
  margin: 2px;
  margin-top: 30px;
  align-items: center; 
`
export const Text = styled.Text`
  color: ${colors.roxo};
  font-weight: 10;
  text-align: center;
  padding: 10;
`
export const Image = styled.Image` 
  margin: 20;
`