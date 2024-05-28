/// <reference types="react" />
import { SettingsCreateFormFieldType } from "components/SettingsCreateForm/SettingsCreateFormFieldType";
import { SettingsStation } from "types/SettingsStation";
interface buildColumnsParams {
    handleDeleteItem: (record: SettingsStation) => void;
}
export declare const buildColumns: ({ handleDeleteItem }: buildColumnsParams) => {
    dataIndex: keyof SettingsCreateFormFieldType | "actions" | "location";
    key: string;
    title: string;
    render?: (() => JSX.Element) | undefined;
}[];
export {};
