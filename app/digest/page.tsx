import { UserButton , useUser  } from "@clerk/nextjs";

import Link from 'next/link';
import { DigestItem } from './components/DigestItem';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AddContentSidebar } from './components/AddContentSidebar';

interface Feed {
  id: string;
  title: string;
  type: 'calendar' | 'weather' | 'news';
  content: any;
}

async function getFeeds(): Promise<Feed[]> {
  // In a real application, this would fetch data from an API
  return [];
}

export default async function DigestPage() {
  const feeds = await getFeeds();
  // const { isLoaded, isSignedIn, user } = useUser()
  // const userName = user?.firstName || '';

  return (
    <div className="min-h-screen bg-primary-bg">
      <header className="bg-accent-secondary shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">your digest</h1>
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="mr-4">Add Content</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <AddContentSidebar />
              </SheetContent>
            </Sheet>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {feeds.length === 0 ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Your digest is empty</h2>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="default">Add Your First Digest</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <AddContentSidebar />
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {feeds.map((feed) => (
              <DigestItem key={feed.id} title={feed.title}>
                <p>Feed content placeholder</p>
              </DigestItem>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}