import * as React from "react";

export interface LinkProps {
  children: React.ReactNode;
  to: string;
  targetPath?: string;
  color?: string;
}

export const Link = ({
  children,
  to,
  targetPath = "_self",
  color = "#2563EB",
}: LinkProps): JSX.Element => {
  const style = {
    border: 0,
    cursor: "pointer",
    display: "flex",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "12px",
    lineHeight: "12px",
    color: color ? color : "red",
  };
  return (
    <a href={to} target={targetPath} style={style}>
      {children}
    </a>
  );
};
