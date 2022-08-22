/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import Navbar from '../component/organisms/Navbar';
import MainBanner from '../component/organisms/MainBanner';
import TransactionStep from '../component/organisms/TransactionStep';
import FeaturedGame from '../component/organisms/FeaturedGame';
import Reached from '../component/organisms/Reached';
import Story from '../component/organisms/Story';
import Footer from '../component/organisms/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>StoreGG - Get a New Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati"
        />
        <meta property="og:title" content="StoreGG - Get a New Experience in Gaming" />
        <meta property="og:description" content="StoreGG - Get a New Experience in Gaming" />
        <meta property="og:url" content="https://storegg.com" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
