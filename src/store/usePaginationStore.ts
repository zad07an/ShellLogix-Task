import { create } from "zustand";

interface PaginationStoreProps {
  count: number | undefined;
  total: number | undefined;
  setCount: (newCount: number) => void;
}

export const usePaginationStore = create<PaginationStoreProps>((set, get) => {
  const count = get()?.count;
  const total = !!count ? Math.ceil(count / 10) : undefined;

  return {
    count: undefined,
    total,
    setCount: (newCount) =>
      set(() => ({
        count: newCount,
      })),
  };
});
