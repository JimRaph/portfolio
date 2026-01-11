import Parser from 'rss-parser';

export interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  categories: string[];
  thumbnailUrl: string;
}

const RSS_URL = 'https://jimmywritessometimes.vercel.app/articles/rss.xml';

export async function fetchArticles(): Promise<Article[]> {
  const parser = new Parser({
    customFields: {
      item: [
        ['media:thumbnail', 'mediaThumbnail', { keepArray: false }],
      ],
    },
  });

  try {
    const response = await fetch(RSS_URL, {
      next: { tags: ['articles'] },
    });

    if (!response.ok) {
        console.error(`Failed to fetch RSS feed: ${response.statusText}`);
        return [];
    }

    const xml = await response.text();
    const feed = await parser.parseString(xml);

    return feed.items.map((item: any) => ({
      title: item.title || '',
      link: item.link || '',
      pubDate: item.pubDate || '',
      description: item.contentSnippet || item.description || '',
      categories: item.categories || [],
      thumbnailUrl: item.enclosure?.url || item.mediaThumbnail?.$.url || '/placeholder.png',
    }));
  } catch (error) {
    console.error('Error fetching or parsing RSS feed:', error);
    return [];
  }
}
