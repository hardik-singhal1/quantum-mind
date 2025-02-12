import React from "react";

interface ButtonProps {
  text: string;
  href: string;
  variant?: "primary" | "outline";
}

const Button: React.FC<ButtonProps> = ({ text, href, variant = "primary" }) => {
  const baseStyle = "px-6 py-2 rounded-lg transition";
  const styles = {
    primary: `bg-blue-600 text-white hover:bg-blue-500 ${baseStyle}`,
    outline: `border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white ${baseStyle}`,
  };

  return (
    <a href={href} className={styles[variant]}>
      {text}
    </a>
  );
};

export default Button;
