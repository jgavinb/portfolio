import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense, useEffect, useState } from 'react';
import Loader from '../components/Loader';

import Hero from '../sections/Hero';
import Navbar from '../sections/Navbar';

const Email = dynamic(() => import('../components/Email'), { ssr: false });
const SocialIcons = dynamic(() => import('../components/SocialIcons'), { ssr: false });

const Consulting = dynamic(() => import('../sections/Consulting'), {
  loading: () => <div className="section-loader" />,
});

const Experience = dynamic(() => import('../sections/Experience'), {
  loading: () => <div className="section-loader" />,
});

const FAQ = dynamic(() => import('../sections/FAQ'), {
  loading: () => <div className="section-loader" />,
});

const Contact = dynamic(() => import('../sections/Contact'), {
  loading: () => <div className="section-loader" />,
});

const Footer = dynamic(() => import('../sections/Footer'), { ssr: false });

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className="app">
      <Head>
        <title>Gavin Brumfield — Data Scientist &amp; AI Consultant</title>
        <meta
          name="description"
          content="Gavin Brumfield is a Data Scientist and AI Consultant based in Austin, TX. Building production AI systems and helping businesses put AI to work."
        />
        <link rel="canonical" href="https://www.gav-n.dev" />
        <meta property="og:title" content="Gavin Brumfield — Data Scientist & AI Consultant" />
        <meta
          property="og:description"
          content="Building production AI systems and helping businesses put AI to work."
        />
        <meta property="og:url" content="https://www.gav-n.dev" />
        <link rel="shortcut icon" href="/icons/favicon.png" />
        <meta
          name="google-site-verification"
          content="DgzOS3oNMuUQ4Y1sU7x860SgyvsYvnd1BCWQLFu0KT8"
        />
      </Head>
      {showContent && (
        <>
          <Navbar />
          <Suspense fallback={null}>
            <SocialIcons />
            <Email />
          </Suspense>
          <main style={{ paddingTop: '60px' }}>
            <Hero />
            <Suspense fallback={<div className="section-loader" />}>
              <Consulting />
            </Suspense>
            <Suspense fallback={<div className="section-loader" />}>
              <Experience />
            </Suspense>
            <Suspense fallback={<div className="section-loader" />}>
              <FAQ />
            </Suspense>
            <Suspense fallback={<div className="section-loader" />}>
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
}

export default Index;
