import { render, screen } from "@testing-library/react";
import { Paragraph } from "./Paragraph";

describe("Paragraph", () => {
  test("renders a default Paragraph with text", async () => {
    render(<Paragraph>Default Paragraph</Paragraph>);

    expect(screen.getByText("Default Paragraph")).toBeInTheDocument();

    expect(screen.getByText("Default Paragraph")).toHaveStyle({
      color: "#000",
      fontWeight: 300,
      textAlign: "left",
    });
  });
  test("renders a centered Paragraph", async () => {
    render(<Paragraph center>Paragraph</Paragraph>);
    expect(screen.getByText("Paragraph")).toHaveStyle({
      textAlign: "center",
    });
  });
  test("renders a hotpink Paragraph", async () => {
    render(<Paragraph color="hotpink">Paragraph</Paragraph>);

    expect(screen.getByText("Paragraph")).toHaveStyle({
      color: "hotpink",
    });
  });
  test("renders a bold Paragraph", async () => {
    render(<Paragraph bold>Paragraph</Paragraph>);

    expect(screen.getByText("Paragraph")).toHaveStyle({
      fontWeight: 700,
    });
  });
});
