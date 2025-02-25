import React, { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  const defaultClasses = "border border-[#C778DD] hover:bg-[#C778DD] px-4 py-2 transition-all duration-200";

  return (
    <button type={type} onClick={onClick} className={`${defaultClasses} ${className}`}>
      {children}
    </button>
  );
};
