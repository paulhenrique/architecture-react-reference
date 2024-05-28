/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<import(".").CardProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
    args: {
        onClick: import("@vitest/spy").Mock<[], void>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Available: Story;
export declare const Busy: Story;
