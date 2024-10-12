import { ActiveLink } from "@/components/atoms/ActiveLink";
import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof ActiveLink>;

const meta: Meta<StoryProps> = {
  component: ActiveLink,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Link: Story = {
  args: {
    children: "Hello",
    href: "/",
  },
  render: ({ href, children }) => (
    <ActiveLink href={href}>{children}</ActiveLink>
  ),
};
