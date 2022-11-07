export type GetPosts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Posts = GetPosts & {
  name: string;
  role: string;
  avatar: string;
};

export type Comments = {
  content: string;
  userId: number | string;
  role: string;
  id: number | string;
  onDeleteComment: (arg0: string) => void;
};
