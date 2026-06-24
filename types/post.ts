export interface Post {
  id: number;
  slug: string;
  date: string;

  title: {
    rendered: string;
  };

  excerpt: {
    rendered: string;
  };

  content?: {
    rendered: string;
  };

  read_time: number;

  _embedded?: any;
  // _embedded?: {};
}
