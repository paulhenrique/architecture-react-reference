/// <reference types="react" />
import { SettingsCreateFormFieldType } from "components/SettingsCreateForm/SettingsCreateFormFieldType";
import { Item } from "../components/EditableCell";
import { FormInstance } from "antd";
interface BuildColumnsParams {
    handleEditingKey: (record: Item) => void;
    isEditing: (record: Item) => boolean;
    form: FormInstance;
    handleCancel: () => void;
    handleComplete: () => void;
}
export declare const buildColumns: ({ handleEditingKey, isEditing, handleCancel, handleComplete, }: BuildColumnsParams) => {
    dataIndex: keyof SettingsCreateFormFieldType["maxDateTimeRangePotency"][number] | "actions";
    key: string;
    title: string;
    render?: (() => JSX.Element) | undefined;
}[];
export {};
