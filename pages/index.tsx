import AuthorCard from '@Components/AuthorCard'
import HomeLayout from '@Layouts/HomeLayout'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <HomeLayout>
      <AuthorCard />
    </HomeLayout>
  )
}
