import { ReactNode } from "react";
interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}
const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className="" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
