import Head from 'next/head';
import DarkVeil from './../app/components/DarkVeil';
import { Bodoni_Moda } from '@next/font/google'

const bodoni = Bodoni_Moda({
  weight: ['500']
})

export default function Home() {

  return (
    <>

      <Head>
        <title>Diganta Biswas | Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Diganta Biswas — showcasing web development and software solutions. Explore skills, projects, and contact details."
        />
        <meta name="keywords" content="Diganta Biswas, Web Developer, Portfolio, JavaScript, Python, Next.js, React" />
        <meta name="author" content="Diganta Biswas" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Diganta Biswas | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Explore the portfolio of Diganta Biswas — showcasing full-stack web apps and innovative projects."
        />
        <meta property="og:url" content="https://digantabiswas.tech/" />
        {/* <meta property="og:image" content="https://yourdomain.com/preview.png" /> */}
      </Head>


      {/* Background */}
      <div className={`container w-full h-[100vh] relative ${bodoni.className} overflow-hidden`}>
        <div className='w-full h-full top-0 left-0 fixed z-[-1]'>
          <DarkVeil />
        </div>

        {/* Main Content */}
        <div className=' w-full h-full flex justify-center items-center flex-col top-0 left-0'>
          <div className='name text-[15vw]'>
            biswas
          </div>
        </div>



      </div>
    </>
  );
}
