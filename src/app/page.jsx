import Head from 'next/head';
import HeroName from './components/HeroName';
import Spline from '@splinetool/react-spline/next';
import HeroSection from './components/v3.0/HeroSection';
import Navbar from './components/v3.0/Navbar';
import Projects from './components/v3.0/Projects';

export default function Home() {

  return (
    <>
    <div className="w-screen h-max overflow-x-hidden flex flex-col justify-center items-center">
      <Navbar />
      <HeroSection />
      <Projects />
    </div>
    </>
  );
}
