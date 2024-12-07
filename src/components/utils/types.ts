export type TSkill = {
  _id?: string;
  type: string;
  category: "soft" | "tech";
  description?: string;
  level?: number;
};

export type TProject = {
  name: string;
  description: string;
  github_url: string;
  live_url: string;
  image: string;
};
export type TBlog = {
  name: string;
  description: string;
  link: string;
  image: string;
};
