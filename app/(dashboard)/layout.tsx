"use client";

import Link from "next/link";
import { Suspense } from "react";

function UserMenu() {
  return (
    <>
      <Link
        href="/about"
        className="text-sm font-medium text-gray-700 hover:text-gray-900"
      >
        About
      </Link>
    </>
  );
}

function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="StarkVision Logo" width={150} height={40} />
          {/* <span className="ml-2 text-xl font-semibold text-gray-900">StarkVision</span> */}
        </Link>
        <div className="flex items-center space-x-4">
          <Suspense fallback={<div className="h-9" />}>
            <UserMenu />
          </Suspense>
        </div>
      </div>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      {children}
    </section>
  );
}
