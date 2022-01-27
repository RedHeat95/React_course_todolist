import { ChangeEventHandler } from "react";

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ onChange, value }: IProps) => {
  return <input onChange={onChange} value={value} />;
};