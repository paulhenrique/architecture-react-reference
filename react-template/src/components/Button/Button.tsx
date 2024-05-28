/**
 * @file Button.tsx
 * @description Button component.
 */

interface ButtonProps {
  children?: React.ReactNode;
}
export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
