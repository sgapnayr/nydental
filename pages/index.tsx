import Head from 'next/head'
import Image from 'next/image'
import Hero from '../Components/Home/Hero/Hero'
import Info1 from '../Components/Home/Info1/Info1'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.App}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Info1 />
      </main>

    </div >
  )
}
