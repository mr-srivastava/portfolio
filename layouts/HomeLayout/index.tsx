import Footer from '@Components/Footer';
import Header from '@Components/Header';
import Head from 'next/head';
import React from 'react';

function HomeLayout({ children }: any) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Aadarsh Srivastava</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full items-center justify-center px-20 py-10 sm:px-40 md:px-60">
        <Header />
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center sm:px-40 md:px-60">
        {children}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <Footer />
      </footer>
    </div>
  );
}

export default HomeLayout;
