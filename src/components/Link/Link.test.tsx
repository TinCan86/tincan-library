import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Link } from "./Link";

describe("Link", () => {
  test("renders a default Link with text", async () => {
    render(<Link to="www.saykorv.nu">Default Link</Link>);

    expect(screen.getByText("Default Link")).toBeInTheDocument();
    expect(screen.getByText("Default Link").closest("a")).toHaveAttribute(
      "href",
      "www.saykorv.nu"
    );

    expect(screen.getByText("Default Link")).toHaveStyle({
      color: "#2563EB",
    });
  });
  test("renders a target Link", async () => {
    render(
      <Link color="green" to="www.saykorv.nu" targetPath="_blank">
        Link
      </Link>
    );
    expect(screen.getByText("Link").closest("a")).toHaveAttribute(
      "href",
      "www.saykorv.nu"
    );
    expect(screen.getByText("Link")).toHaveStyle({
      color: "green",
    });
  });
});
