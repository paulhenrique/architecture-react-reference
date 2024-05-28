/**
 * @file Drawer.tsx
 * @description Drawer component.
 */
/// <reference types="react" />
import { DrawerContentProps } from "components/DrawerContent";
interface DrawerProps {
    open: boolean;
    drawerContentProps: DrawerContentProps;
    onClose: () => void;
}
export declare const Drawer: React.FC<DrawerProps>;
export default Drawer;
