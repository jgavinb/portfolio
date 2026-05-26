import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense, useState } from 'react';
import Loader from '../components/Loader';

import Hero from '../sections/Hero';
import Navbar from '../sections/Navbar';

const SocialIcons = dynamic(() => import('../components/SocialIcons'), { ssr: false });

const Pain = dynamic(() => import('../sections/Pain'), {
  loading: () => <div className="section-loader" />,
});

const Consulting = dynamic(() => import('../sections/Consulting'), {
  loading: () => <div className="section-loader" />,
});

const CaseStudy = dynamic(() => import('../sections/CaseStudy'), {
  loading: () => <div className="section-loader" />,
});

const About = dynamic(() => import('../sections/About'), {
  loading: () => <div className="section-loader" />,
});

const HowItWorks = dynamic(() => import('../sections/HowItWorks'), {
  loading: () => <div className="section-loader" />,
});

const FAQ = dynamic(() => import('../sections/FAQ'), {
  loading: () => <div className="section-loader" />,
});

const Experience = dynamic(() => import('../sections/Experience'), {
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
        <title>Gavin Brumfield — AI Consulting for Small Businesses in Austin, TX</title>
        <meta
          name="description"
          content="Gavin Brumfield is an AI consultant in Austin, TX helping small businesses automate workflows, build custom AI tools, and make better decisions with their data."
        />
        <link rel="canonical" href="https://www.gav-n.dev" />
        <meta property="og:title" content="Gavin Brumfield — AI Consulting for Small Businesses" />
        <meta
          property="og:description"
          content="Custom AI tools and automation for small businesses in Austin and beyond. Book a free 30-min call."
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
          </Suspense>
          <main style={{ paddingTop: '60px' }}>
            <Hero />
            <Suspense fallback={<div className="section-loader" />}>
              <Pain />
            </Suspense>
            <Suspense fallback={<div className="section-loader" />}>
              <Consulting />
            </Suspense>
            <Suspense fallback={<div className="section-loader" />}>
              <CaseStudy />
            </Suspense>
            <Suspense fallback={<div className="section-loader" />}>
              <About />
            </Suspense>
            <Suspense fallback={<div className="section-loader" />}>
              <HowItWorks />
            </Suspense>
            <Suspense fallback={<div className="section-loader" />}>
              <FAQ />
            </Suspense>
            <Suspense fallback={<div className="section-loader" />}>
              <Experience />
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
