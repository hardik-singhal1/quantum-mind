type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "outline";
};

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button", variant = "primary" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-8 py-3 rounded-full transition-all ${
        variant === "primary" ? "bg-blue-600 text-white hover:bg-blue-500" : "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
