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
          {/* <p>your friendly neighborhood web developer</p>
          <div className='border-1 mt-8 p-2 rounded-xl backdrop-blur-2xl bg-transparent cursor-pointer border-violet-600'>Hire Me</div> */}
          

        </div>




      </div>
    </>
  );
}
