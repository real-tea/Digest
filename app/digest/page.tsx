import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import { DigestItem } from './components/DigestItem';

interface Feed {
  id: string;
  title: string;
  type: 'calendar' | 'weather' | 'reddit' | 'techcrunch' | 'youtube' | 'instagram' | 'twitter';
  content: any; // This should be more specific based on the feed type
}

async function getFeeds(): Promise<Feed[]> {
  // In a real application, this would fetch data from an API
  return [];
}

export default async function DigestPage() {
  const feeds = await getFeeds();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Your Digest</h1>
          <div className="flex items-center">
            <Link href="/add-content" className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Add Content
            </Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {feeds.length === 0 ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Your digest is empty</h2>
            <Link href="/add-content" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Add Your First Content
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {feeds.map((feed) => (
              <DigestItem key={feed.id} title={feed.title}>
                {/* Content will be added here based on feed type */}
                <p>Feed content placeholder</p>
              </DigestItem>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}