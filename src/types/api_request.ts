type User = {
  _id: string;
  username: string;
  email: string;
  password?: string;
  img?: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type Post = {
  _id: string;
  title: string;
  desc: string;
  img?: string;
  userId: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
};


export type { Post, User };
