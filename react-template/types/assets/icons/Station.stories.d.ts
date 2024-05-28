/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import Station from "./Station";
declare const meta: {
    title: string;
    component: typeof Station;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
    args: {
        onClick: import("@vitest/spy").Mock<[event: import("react").MouseEvent<SVGSVGElement, MouseEvent>], void>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
