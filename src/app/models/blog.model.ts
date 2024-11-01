export interface BlogRaw {
  id: string;
  title: string;
  author: string;
  content: string;
  date: Date;
}

export interface Blog extends BlogRaw {
  showDetail: boolean;
  showEdit: boolean;
}
