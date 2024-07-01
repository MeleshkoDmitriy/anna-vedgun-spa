export type TLink = {
  title: string;
  path: string;
};

export type TPost = {
  id: number;
  date: string;
  title: string;
  text: string;
  url?: string;
  image?: string;
};

export type TFeedback = {
  id: number;
  date: string;
  text: string;
};

export type TMessage = {
  name: string;
  text: string;
  date: string;
  isAllowed: boolean;
};
