export type extensionType = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: Array<string>;
  meta: {
    added: boolean;
    disabled?: boolean;
  };
};
