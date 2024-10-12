import { ReactNode } from "react";

interface ListItemsProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

export const ListItems = <T,>({ items, render }: ListItemsProps<T>) => {
  return <>{items.map((item) => render(item))}</>;
};
