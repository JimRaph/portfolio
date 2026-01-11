import { NextResponse } from 'next/server';
import { fetchArticles } from '@/app/utils/fetchArticles';

export async function GET() {
  try {
    const articles = await fetchArticles();
    return NextResponse.json(articles);
  } catch (error) {
    console.error('API Error fetching articles:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}
