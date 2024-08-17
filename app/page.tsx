import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Footer } from "./components/footer";
import { ClerkLogo } from "./components/clerk-logo";

export default function Home() {
  return (
    <>
      <main className="bg-[#FAFAFA] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <header className="flex justify-between items-center mb-16">
           
            <SignedOut>
              <SignInButton>
                <button className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link
                href="/digest"
                className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold"
              >
                My Digest
              </Link>
            </SignedIn>
          </header>

          <h1 className="text-5xl font-bold mb-6">Stop Scrolling Endlessly</h1>
          <h2 className="text-3xl font-semibold mb-4">A Productivity First Application →</h2>
          <p className="text-xl mb-8">
            With digest, you never have to feel like you're missing out on what's going on in the world. 
            Get a personalized Digest of just the content you want to see every single day in your inbox.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Features:</h3>
          <ul className="list-disc list-inside mb-8">
            <li>Google Calendar integration</li>
            <li>Weather updates</li>
            <li>Reddit feed (top 10 headlines)</li>
            <li>TechCrunch news (top 10 articles)</li>
            <li>YouTube Feed (top 10 videos)</li>
            <li>Instagram Feed (10 posts)</li>
            <li>Twitter feed</li>
          </ul>

          <SignedOut>
            <SignInButton>
              <button className="px-6 py-3 rounded-full bg-[#131316] text-white text-lg font-semibold">
                Get Started
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </main>
      <Footer />
    </>
  );
}