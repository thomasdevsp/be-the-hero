import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { ButtonElement } from "./style"

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string
}

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <ButtonElement {...rest}>
      {text}
    </ButtonElement>
  )
}
