import React from "react";

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {};

export const Button = (props: ButtonProps) => {
  return <button type={props.type}>{props.children}</button>;
};
