import Head from 'next/head';
import HeroName from './components/HeroName';
import Spline from '@splinetool/react-spline/next';

export default function Home() {

  return (
    <>
      {/* Background */}
      <div className={`w-[100vw] h-[100vh] relative overflow-hidden`}>

        {/* Main Content */}
        <div className=' w-[100vw] h-full flex justify-center items-center flex-col top-0 left-0'>
          <div className=' hidden model bg-transparent md:flex justify-center items-center w-screen h-screen fixed z-0 top-0 left-0'>
            <Spline
            className="w-full h-full flex justify-center items-center"
              scene="https://prod.spline.design/B8uJGluP34LajqnG/scene.splinecode"
              
            />
          </div>
          <div className='w-[100%]  h-full flex flex-col justify-center items-center'>
          <HeroName/>
          </div>

        </div>




      </div>
    </>
  );
}
