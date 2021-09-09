import { ImageSourcePropType } from 'react-native'

export interface ButtonProps {
    onPress: () => void
    nome?: string
    image?: ImageSourcePropType
    title?: string
    idade?: number
    raca?: string
    sexo?: string
    distancia?: string
    type?: "edit" | "remove"
    children?: JSX.Element
    size?: "default" | "define"
}