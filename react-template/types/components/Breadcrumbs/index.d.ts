/**
 * @file Breadcrumbs.tsx
 * @description Breadcrumbs component.
 */
/// <reference types="react" />
import { BreadcrumbProps } from "antd";
export interface BreadcrumbsProps extends Omit<BreadcrumbProps, "separator"> {
}
export declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
export default Breadcrumbs;
