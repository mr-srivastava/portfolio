import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Aadarsh Srivastava</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full items-center justify-center px-20 py-10">
        <Header />
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
          className="text-6xl font-bold"
        >
          Always in <span className="text-blue-600">BETA</span>
        </motion.h1>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <Footer />
      </footer>
    </div>
  )
}
