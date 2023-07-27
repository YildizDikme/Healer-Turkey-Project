import "@/styles/globals.css";
import Head from 'next/head';
import Header from "@/components/Header"
import Footer from "@/components/Footer";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Healer Turkey</title>
        <meta
          name="description"
          content="Hair Transplantation with Heaşer Turkey"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
