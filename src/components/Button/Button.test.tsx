import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button component", () => {
  test("renders with correct label", () => {
    render(<Button label="Click Me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies correct variant class", () => {
    render(<Button label="Primary" variant="primary" />);
    const buttonElement = screen.getByText(/primary/i);
    expect(buttonElement).toHaveClass("primary");
  });

  test("applies correct size class", () => {
    render(<Button label="Large" size="large" />);
    const buttonElement = screen.getByText(/large/i);
    expect(buttonElement).toHaveClass("large");
  });

  test("applies multiple classes correctly", () => {
    render(<Button label="Primary Large" variant="primary" size="large" />);
    const buttonElement = screen.getByText(/primary large/i);
    expect(buttonElement).toHaveClass("primary");
    expect(buttonElement).toHaveClass("large");
  });
});
