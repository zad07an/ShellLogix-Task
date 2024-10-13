import { render } from "@testing-library/react";
import { SubmitButton } from "@/components/atoms/SubmitButton";

describe("SubmitButton component", () => {
  it("renders a normal button when there is not error or pending", () => {
    const { getByText } = render(
      <SubmitButton isPending={false} isError={false}>
        Click me
      </SubmitButton>
    );

    const button = getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveClass("error");
    expect(button).not.toBeDisabled();
  });

  it("render a loading button when there is a pending", () => {
    const { getByText } = render(
      <SubmitButton isPending={true} isError={false}>
        Click me
      </SubmitButton>
    );

    const button = getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveClass("error");
    expect(button).toBeDisabled();
  });

  it("renders an error button when there is an error", () => {
    const { getByText } = render(
      <SubmitButton isPending={false} isError={true}>
        Click me
      </SubmitButton>
    );

    const button = getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("error");
    expect(button).not.toBeDisabled();
  });
});
