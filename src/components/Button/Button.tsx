import React from "react";
import "./button.css";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "medium",
}) => {
  const className = `btn ${variant} ${size}`;
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
