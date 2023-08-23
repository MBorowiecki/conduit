import { HTMLInputTypeAttribute } from "react";

export interface IBasicInputProps {
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
  type: HTMLInputTypeAttribute;
}
