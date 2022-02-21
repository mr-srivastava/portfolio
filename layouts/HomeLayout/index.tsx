import Footer from '@Components/Footer';
import Header from '@Components/Header';
import Head from 'next/head';
import React from 'react';

interface HomeLayoutProps {
  children: any;
  centerChildren?: boolean;
}

function HomeLayout({ children, centerChildren = true }: HomeLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Aadarsh Srivastava</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <header className="flex w-full items-center justify-center px-20 sm:px-40 md:px-60">
        <Header />
      </header>

      <main
        className={`flex w-full flex-1 flex-col px-20 text-center ${
          centerChildren ? 'items-center justify-center' : ''
        } sm:px-40 md:px-60`}
      >
        {children}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <Footer />
      </footer>
    </div>
  );
}

export default HomeLayout;
