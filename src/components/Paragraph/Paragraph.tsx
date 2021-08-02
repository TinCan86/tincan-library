import * as React from "react";

export interface ParagraphProps {
  children: React.ReactNode;
  bold?: boolean;
  center?: boolean;
  color?: string;
}

export const Paragraph = ({
  children,
  bold = false,
  center = false,
  color = "#000",
}: ParagraphProps): JSX.Element => {
  const style = {
    fontSize: "12px",
    lineHeight: "12px",
    color: color ? color : "#000",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: bold ? 700 : 300,
    textAlign: center ? ("center" as "center") : ("left" as "left"),
  };
  return <p style={style}>{children}</p>;
};
