import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "@/components/molecules/Pagination"; // Adjust the import path accordingly
import { usePagination } from "@/hooks/usePagination";

// Mock the usePagination hook
jest.mock("@/hooks/usePagination");

describe("Pagination component", () => {
  beforeEach(() => {
    // Reset mock implementations before each test
    jest.clearAllMocks();
  });

  it("renders Previous and Next buttons", () => {
    // Mock the return values from usePagination
    (usePagination as jest.Mock).mockReturnValue({
      isDisabledPrevious: false,
      isDisabledNext: false,
      onNext: jest.fn(),
      onPrevious: jest.fn(),
    });

    render(<Pagination />);

    const previousButton = screen.getByText("Previous");
    const nextButton = screen.getByText("Next");

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("disables the Previous button when isDisabledPrevious is true", () => {
    (usePagination as jest.Mock).mockReturnValue({
      isDisabledPrevious: true,
      isDisabledNext: false,
      onNext: jest.fn(),
      onPrevious: jest.fn(),
    });

    render(<Pagination />);

    const previousButton = screen.getByText("Previous");
    expect(previousButton).toBeDisabled();
  });

  it("disables the Next button when isDisabledNext is true", () => {
    (usePagination as jest.Mock).mockReturnValue({
      isDisabledPrevious: false,
      isDisabledNext: true,
      onNext: jest.fn(),
      onPrevious: jest.fn(),
    });

    render(<Pagination />);

    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeDisabled();
  });

  it("calls onPrevious when Previous button is clicked", () => {
    const onPreviousMock = jest.fn();
    (usePagination as jest.Mock).mockReturnValue({
      isDisabledPrevious: false,
      isDisabledNext: false,
      onNext: jest.fn(),
      onPrevious: onPreviousMock,
    });

    render(<Pagination />);

    const previousButton = screen.getByText("Previous");
    fireEvent.click(previousButton);

    expect(onPreviousMock).toHaveBeenCalledTimes(1);
  });

  it("calls onNext when Next button is clicked", () => {
    const onNextMock = jest.fn();
    (usePagination as jest.Mock).mockReturnValue({
      isDisabledPrevious: false,
      isDisabledNext: false,
      onNext: onNextMock,
      onPrevious: jest.fn(),
    });

    render(<Pagination />);

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    expect(onNextMock).toHaveBeenCalledTimes(1);
  });
});
