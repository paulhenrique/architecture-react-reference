/// <reference types="react" />
interface Option {
    label: string;
    value: string;
}
export interface SettingsSearchBoxProps {
    onSubmit?: () => void;
    chargeStationOptions?: Option[];
    onChangeChargeStation?: (value: string) => void;
    address?: string;
    onChangeState?: (value: string) => void;
    stateOptions?: Option[];
    hideSettings?: boolean;
}
/**
 * @file SettingsSearchBox.tsx
 * @description SettingsSearchBox component.
 */
export declare const SettingsSearchBox: React.FC<SettingsSearchBoxProps>;
export default SettingsSearchBox;
