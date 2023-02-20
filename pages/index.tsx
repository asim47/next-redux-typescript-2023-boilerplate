// This is the page that will be rendered at / and /index
import Head from 'next/head'
import { Header } from '../src/components/home/Header'
import { Footer, NavBarComp } from '../src/commonComponents'


export default function Home() {
  return (
    <>
      <NavBarComp />
      <Header />
      <Footer />
    </>
  )
}
