import Head from 'next/head';
import HeroName from './components/HeroName';
import Spline from '@splinetool/react-spline/next';
import HeroSection from './components/v3.0/HeroSection';
import Navbar from './components/v3.0/Navbar';

export default function Home() {

  return (
    <>
    <div className="container w-screen h-max overflow-x-hidden">
      <Navbar />
      <HeroSection />
    </div>
    </>
  );
}
