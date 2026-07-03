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

  _embedded: {
    author: Author[];
    "wp:featuredmedia": wpFeaturedMedia[];
  };
}

interface Author {
  name: string;
  avatar_urls: {
    [key: string]: string;
    "24": string;
    "48": string;
    "96": string;
  };
}

interface wpFeaturedMedia {
  source_url: string;
  alt_text: string;
}
