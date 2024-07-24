import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

const Button: FC<Props> = ({ children }) => {
  return <div>Button</div>;
};

export default Button;
