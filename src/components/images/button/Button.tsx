import { ReactNode } from "react";
interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}
const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      className="animate-bounce rounded p-1 text-white bg-indigo-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
