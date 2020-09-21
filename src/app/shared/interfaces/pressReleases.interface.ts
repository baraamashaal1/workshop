export interface PressReleases {
  articles: Articles[];
  sourceCategory: SourceCategory[];
  status: string;
}


export interface Articles {
  content?: string;
  description?: string;
  id?: number;
  publishedAt?: any;
  showOnHomepage?: boolean;
  sourceID?: number;
  title?: string;
  urlToImage?: string;
}

export interface SourceCategory {
  id: number;
  name: string;
}
