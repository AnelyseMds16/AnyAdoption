import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
  font-size: 20px;
  color: ${colors.preto};
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
`
export const Form = styled.KeyboardAvoidingView`
  align-items: center;
  text-align: center;
`
export const FormRow = styled.View`
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
  text-align: center;
`
export const Label = styled.Text`
  font-size: 18px;
  color: ${colors.preto};
  padding: 5px;
`
export const TextInput = styled.TextInput`
  border-bottom-width: 1px;
  font-size: 18px;
  padding: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  width: 50%;
`