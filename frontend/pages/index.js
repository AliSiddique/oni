import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/home/hero'
import styles from '../styles/Home.module.css'
import Navbar from '../components/client/Navbar'
import Destination from '../components/home/destinations'
import Features from '../components/home/features'
import Footer from '../components/client/Footer'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destination/>
      <Features/>
      <Footer/>
    </div>
  )
}
