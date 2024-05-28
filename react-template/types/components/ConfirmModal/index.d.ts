/**
 * @file ConfirmModal.tsx
 * @description ConfirmModal component.
 */
/// <reference types="react" />
export interface ConfirmModalProps {
    title?: string;
    description?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    onOpen?: () => void;
    isOpen?: boolean;
}
/**
 * Conteúdo do modal
 * @returns
 */
export declare const ConfirmModal: React.FC<ConfirmModalProps>;
export default ConfirmModal;
