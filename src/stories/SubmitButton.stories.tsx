import { SubmitButton } from "@/components/atoms/SubmitButton";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof SubmitButton>;

const meta: Meta<StoryProps> = {
  component: SubmitButton,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Pending: Story = {
  args: {
    children: "Click me",
    isError: false,
    isPending: true,
  },
  render: ({ children, isPending, isError }) => (
    <SubmitButton isPending={isPending} isError={isError}>
      {children}
    </SubmitButton>
  ),
};

export const Error: Story = {
  args: {
    children: "Click me",
    isError: true,
    isPending: false,
  },
  render: ({ children, isPending, isError }) => (
    <SubmitButton isPending={isPending} isError={isError}>
      {children}
    </SubmitButton>
  ),
};

export const Normal: Story = {
  args: {
    children: "Click me",
    isError: false,
    isPending: false,
  },
  render: ({ children, isPending, isError }) => (
    <SubmitButton isPending={isPending} isError={isError}>
      {children}
    </SubmitButton>
  ),
};
