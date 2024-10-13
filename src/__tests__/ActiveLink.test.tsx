import { render } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { ActiveLink } from "@/components/atoms/ActiveLink";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("ActiveLink component", () => {
  it("renders as active when the pathname matches the href", () => {
    (usePathname as jest.Mock).mockReturnValue("/about");

    const { getByText } = render(<ActiveLink href="/about">About</ActiveLink>);

    const link = getByText("About");
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("active");
  });

  it("renders as inactive when the pathname does not match the href", () => {
    (usePathname as jest.Mock).mockReturnValue("/home");

    const { getByText } = render(<ActiveLink href="/about">About</ActiveLink>);

    const link = getByText("About");
    expect(link).toBeInTheDocument();
    expect(link).not.toHaveClass("active");
  });
});
