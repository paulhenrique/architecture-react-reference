import type { Meta, StoryObj } from "@storybook/react";
import { Home } from "./Home";

const meta = {
  title: "Components/Home",
  component: Home,
  tags: ["autodocs"],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
