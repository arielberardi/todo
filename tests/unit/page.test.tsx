import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home component", () => {
  it("renders Home text", () => {
    render(<Home />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
