/**
 * @file Card.tsx
 * @description Card component.
 */
/// <reference types="react" />
import { StatusColors } from "constants/Status";
export interface CardProps {
    /**
     * Card title
     */
    title: string;
    /**
     * Card situation
     */
    situation: keyof typeof StatusColors;
    /**
     * Function to be called when the button is clicked
     */
    onClick?: () => void;
}
/**
 * Componente que renderiza o card de item de carregamento
 * @returns
 */
export declare const Card: React.FC<CardProps>;
export default Card;
