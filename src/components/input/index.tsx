import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { InputElement } from "./style"

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: string
  placeholder?: string
}

export function Input({ type = "text", placeholder, ...rest }: InputProps) {
  return (
    <InputElement type={type} placeholder={placeholder} {...rest} />
  )
}
