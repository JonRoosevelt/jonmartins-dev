export type ItemRow = {
  name: string;
  link?: string;
};

export type TableDataItem = {
  head: string;
  body: Array<ItemRow>;
};
