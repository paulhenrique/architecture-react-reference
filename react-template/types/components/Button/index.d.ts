import { ButtonProps as AntdButtonProps, TooltipProps } from "antd";
interface ButtonProps extends AntdButtonProps {
    tooltip?: string;
    tooltipProps?: TooltipProps;
}
export declare const Button: ({ tooltip, tooltipProps, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
