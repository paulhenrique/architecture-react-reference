/// <reference types="react" />
export interface Item {
    key: string;
    name: string;
    age: number;
    address: string;
}
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: "number" | "text";
    record: Item;
    index: number;
    children: React.ReactNode;
}
export declare const EditableCell: React.FC<EditableCellProps>;
export {};
