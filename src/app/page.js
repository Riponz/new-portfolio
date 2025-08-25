import Head from 'next/head';
import HeroName from './components/HeroName';
import Spline from '@splinetool/react-spline/next';

export default function Home() {

  return (
    <>
      {/* Background */}
      <div className={`container w-full h-[100vh] relative overflow-hidden`}>

        {/* Main Content */}
        <div className=' w-full h-full flex justify-center items-center flex-col top-0 left-0'>
          <div className='model bg-transparent flex justify-center items-center w-screen h-screen fixed z-0 top-0 left-0'>
            <Spline
            className="w-full h-full flex justify-center items-center"
              scene="https://prod.spline.design/B8uJGluP34LajqnG/scene.splinecode"
              
            />
          </div>
          <HeroName/>
          {/* <p>your friendly neighborhood web developer</p>
          <div className='border-1 mt-8 p-2 rounded-xl backdrop-blur-2xl bg-transparent cursor-pointer border-violet-600'>Hire Me</div> */}


        </div>




      </div>
    </>
  );
}
