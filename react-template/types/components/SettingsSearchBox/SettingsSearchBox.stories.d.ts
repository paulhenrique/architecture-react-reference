/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<import(".").SettingsSearchBoxProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
