import Head from 'next/head';
import HeroName from './components/HeroName';

export default function Home() {

  return (
    <>
      {/* Background */}
      <div className={`container w-full h-[100vh] relative overflow-hidden`}>

        {/* Main Content */}
        <div className=' w-full h-full flex justify-center items-center flex-col top-0 left-0'>
          <HeroName />
        </div>



      </div>
    </>
  );
}
