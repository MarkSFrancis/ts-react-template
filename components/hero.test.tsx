import { render, screen } from "@testing-library/react";
import { Hero } from "./hero";

it("Should render hello world", () => {
  render(<Hero />);
  const element = screen.queryByText("Hello world");

  expect(element).toBeInTheDocument();
});
