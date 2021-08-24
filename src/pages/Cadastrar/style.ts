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
  align-items: center;
  text-align: center;
`
export const FormRow = styled.View`
  flex-direction: row;
  margin-top: 10px;
  text-align: center;
`
export const TextInput = styled.TextInput`
  border: 3px;
  border-radius: 30px;
  font-size: 18px;
  padding: 10px;
  margin-left: 5px;
  margin-bottom: 3px;
  width: 70%;
  border-color: ${colors.roxo};
  background-color: ${colors.roxinho};
  text-align: center;
`

export const View = styled.View`
  display: flex;
  flex-direction: row;
`

export const Text = styled.TextInput`
  color: ${colors.preto};
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`