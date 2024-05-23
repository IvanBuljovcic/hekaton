import React from "react";

type HeaderProps = React.HTMLProps<HTMLHeadElement> & {};

export const Header = (props: HeaderProps) => {
  return <header>{props.children}</header>;
};
