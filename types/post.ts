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

  // _embedded?: unknown;
  _embedded?: {
    author?: Author[];
    "wp:featuredmedia": wpFeaturedMedia[];
  };
}

interface Author {
  name?: string;
  avatar_urls?: object;
}

interface wpFeaturedMedia {
  source_url?: string;
  alt_text?: string;
}
