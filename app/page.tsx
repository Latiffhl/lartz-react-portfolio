import Image from 'next/image';
import Lanyard from './components/Lanyard/Lanyard';
import RotatingText from './components/RotatingText/RotatingText';
import SplitText from './components/SplitText/SplitText';
import BlurText from './components/BlurText/BlurText';
import AnimatedContent from './components/AnimatedContent/AnimatedContent';
import Squares from './components/Squares/Squares';
import TargetCursor from './components/TargetCursor/TargetCursor';
import GradientText from './components/GradientText/GradientText';
import StickerPeel from './components/StickerPeel/StickerPeel';
import LogoLoop from './components/LogoLoop/LogoLoop';
import DecayCard from './components/DecayCard/DecayCard';
import StarBorder from './components/StarBorder/StarBorder';
import SpotlightCard from './components/SpotlightCard/SpotlightCard';
import ScrollStack from './components/ScrollStack/ScrollStack';
import TiltedCard from './components/TiltedCard/TiltedCard';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
];
// Alternative with image sources
const imageLogos = [
  { src: '/logos/company1.png', alt: 'Company 1', href: 'https://company1.com' },
  { src: '/logos/company2.png', alt: 'Company 2', href: 'https://company2.com' },
  { src: '/logos/company3.png', alt: 'Company 3', href: 'https://company3.com' },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <div>
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      </div>
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#d00f0f"
        />
      </div>
      <div className="container mx-auto min-h-screen overflow-x-hidden">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6 ">
                <AnimatedContent distance={150} direction="horizontal" reverse={false} duration={1.2} ease="bounce.out" initialOpacity={0.2} animateOpacity scale={1.1} threshold={0.2} delay={0.3}>
                  <div className="flex items-center gap-2 ">
                    <h1 className="text-2xl font-bold text-white">I'am Ready For </h1>
                    <RotatingText
                      texts={['Graphic Design', 'Web Developer', 'Web3 Enthusiast', 'Creative Coder']}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#d00f0f] text-black overflow-hidden py-0.5 py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                      staggerFrom={'last'}
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '-120%' }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>
                <div className="flex flex-col items-start ">
                  <SplitText
                    text="I'am Latif Palikal Isbah"
                    className="text-5xl font-semibold text-start"
                    delay={50}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                  />
                  <SplitText
                    text="Software Engineer Student"
                    className="text-5xl font-semibold text-start text-[#460fd0]"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                  />
                </div>
                <BlurText
                  text="I am a software engineering student with expertise in programming and data management. I have experience working on projects both independently and in teams."
                  delay={75}
                  animateBy="words"
                  direction="top"
                  className="text-2xl mb-8"
                />
                <div className="flex item-center ">
                  <GradientText colors={['#d00f0f', '#3b23f1', '#d00f0f', '#3b23f1', '#d00f0f']} animationSpeed={3} showBorder={false} className="px-8 py-6 rounded-lg border cursor-target">
                    Contact Now!
                  </GradientText>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 relative overflow-x-hidden">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />

            <StickerPeel
              imageSrc="/assets/logo/lartz-logo-col.png"
              width={200}
              rotate={30}
              peelBackHoverPct={20}
              peelBackActivePct={40}
              shadowIntensity={0.6}
              lightingIntensity={0.1}
              initialPosition={{ x: -100, y: 100 }}
              className="absolute top-20 right-10"
            />
          </div>
        </div>
      </div>
      <div style={{ height: 'auto', position: 'relative', overflow: 'hidden' }}>
        <LogoLoop logos={techLogos} speed={120} direction="left" logoHeight={48} gap={40} pauseOnHover scaleOnHover fadeOut fadeOutColor="#ffffff" ariaLabel="Technology partners" />
      </div>
      {/* ABOUT */}
      <div className="bg-black py-20 text-white relative z-10 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12">
            {/* Kolom Kiri: Card */}
            <div className="col-span-4">
              {/* Posisikan card di kanan kolom kiri */}
              <DecayCard width={300} height={400} image="/assets/foto/pc-1.jpg">
                <h2 className="text-3xl font-extrabold text-white">
                  Lartz
                  <br />
                  Dev
                </h2>
              </DecayCard>
            </div>
            {/* Kolom Kanan: Teks */}
            <div className="col-span-8  mt-5  text-start">
              <h3 className="text-4xl font-semibold mb-4 text-[#460fd0]">I Develop Applications and also as a graphic designer</h3>
              <p className="text-lg mb-4 ">
                I am Latif Palikal Isbah, a developer and editor and computer science student. I have created various projects carried out individually and in teams. Apart from that, I have quite good soft skills in communicating.
              </p>
              <p className="text-lg mb-4 ">Not only creating applications but also learning how to organize the infrastructure of an application properly so that it is comfortable for users.</p>
              <p className="text-lg mb-4">Sufficient mastery of language programs commonly used by industry.</p>

              <div className="mt-4 inline-block relative hover:y-1 hover:scale-105 transition-all">
                <a href="#portfolio">
                  <StarBorder as="button" className="px-6 py-3 cursor-target" color="cyan" speed="5s" thickness={2} size={48}>
                    View Portfolio
                  </StarBorder>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RECENT PROJECT */}
      <div className="bg-black py-20  text-white relative z-10 overflow-x-hidden" id="portfolio">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-8 text-center text-[#460fd0]">Recent Project</h2>
          <p className="text-center text-lg mb-16">This is a project that I worked on both individually and as a team</p>
        </div>
        {/* Insan AI */}
        <div className="flex justify-center items-center py-8">
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-300 h-120" spotlightColor="rgba(106, 0, 255)">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-12 items-center gap-12">
                {/* 1. KOLOM KIRI */}
                <div className="col-span-4 flex justify-center">
                  <TiltedCard
                    imageSrc="/assets/images/portfolio/InsanAI.jpg"
                    altText="Insan AI"
                    captionText="InsanAI - Web"
                    containerHeight="400px"
                    containerWidth="300px"
                    imageHeight="400px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={<p className="tilted-card-demo-text text-xl font-semibold text-[#460fd0]">Insan AI</p>}
                  />
                </div>

                {/* 2. KOLOM KANAN */}
                <div className="col-span-8 text-start">
                  <h3 className="text-3xl font-bold mb-4">Insan AI - Educattion Platform</h3>
                  <p className="text-lg mb-4">This project is an implementation of integrated learning materials with a focus on addressing educational needs at all levels and providing many special features.</p>
                  {/* <ul className="list-disc list-inside text-lg mb-6 ml-4">
                    <li>**Peran:** Full-stack Developer, UI/UX Designer</li>
                    <li>**Teknologi:** Next.js, React, Tailwind CSS, Lenis Scroll, GSAP</li>
                    <li>**Status:** Live</li>
                  </ul> */}
                  <div className="flex item-center ">
                    <a href="https://insan-ai.id" target="_blank" rel="noopener noreferrer">
                      <GradientText colors={['#d40000', '#460fd0', '#d40000', '#460fd0']} animationSpeed={3} showBorder={false} className="px-6 py-3 border rounded-lg shadow-sm cursor-target hover:y-1 hover:scale-102 transition-all">
                        <div className="text-xl font-semibold">View &rarr;</div>
                      </GradientText>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
        {/* Suvarna */}
        <div className="flex justify-center items-center py-8">
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-300 h-120" spotlightColor="rgba(212, 38, 25)">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-12 items-center gap-12">
                {/* 1. KOLOM KANAN (SEKARANG DI KIRI) */}
                <div className="col-span-8 text-start">
                  <h3 className="text-3xl font-bold mb-4">Suvarna - Blockchain-Based Safe & Digital Gold Investment</h3>
                  <p className="text-lg mb-4">
                    Digital gold is a digital asset whose value is backed by physical gold. Each digital gold token or unit represents ownership of a specific amount of physical gold stored in a secure storage facility.
                  </p>
                  <p className="text-lg mb-4">With Suvarna, you own gold digitally through blockchain technology, which ensures transparency, security, and ease of transactions without the need to store physical gold.</p>
                  <div className="flex item-center ">
                    <a href="http://suvarna-mu.vercel.app" target="_blank" rel="noopener noreferrer">
                      <GradientText colors={['#d40000', '#460fd0', '#d40000', '#460fd0']} animationSpeed={3} showBorder={false} className="px-6 py-3 border rounded-lg shadow-sm cursor-target hover:y-1 hover:scale-102 transition-all">
                        <div className="text-xl font-semibold">View &rarr;</div>
                      </GradientText>
                    </a>
                  </div>
                </div>

                {/* 2. KOLOM KIRI (SEKARANG DI KANAN) */}
                <div className="col-span-4 flex justify-center">
                  <TiltedCard
                    imageSrc="/assets/images/portfolio/Suvarna.jpg"
                    altText="SuvarnaChain"
                    captionText="Suvarna - Web"
                    containerHeight="400px"
                    containerWidth="300px"
                    imageHeight="400px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={<p className="tilted-card-demo-text text-xl font-semibold text-[#ffffff]">Suvarna</p>}
                  />
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
        {/* Publartz */}
        <div className="flex justify-center items-center py-8">
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-300 h-120" spotlightColor="rgba(32, 27, 200, 1)">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-12 items-center gap-12">
                {/* 1. KOLOM KIRI */}
                <div className="col-span-4 flex justify-center">
                  <TiltedCard
                    imageSrc="/assets/images/portfolio/publartz.jpg"
                    altText="Publartz"
                    captionText="Publartz - Web"
                    containerHeight="400px"
                    containerWidth="300px"
                    imageHeight="400px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={<p className="tilted-card-demo-text text-xl font-semibold text-[#ffffff]">Publartz</p>}
                  />
                </div>

                {/* 2. KOLOM KANAN */}
                <div className="col-span-8 text-start">
                  <h3 className="text-3xl font-bold mb-4">Publartz - publish blog by lartz</h3>
                  <p className="text-lg mb-4">A website for publishing blogs with admin, login, and CURD features. Comments are available on each blog.</p>
                  {/* <ul className="list-disc list-inside text-lg mb-6 ml-4">
                    <li>**Peran:** Full-stack Developer, UI/UX Designer</li>
                    <li>**Teknologi:** Next.js, React, Tailwind CSS, Lenis Scroll, GSAP</li>
                    <li>**Status:** Live</li>
                  </ul> */}
                  <div className="flex item-center ">
                    <a href="https://publartz.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <GradientText colors={['#d40000', '#460fd0', '#d40000', '#460fd0']} animationSpeed={3} showBorder={false} className="px-6 py-3 border rounded-lg shadow-sm cursor-target hover:y-1 hover:scale-102 transition-all">
                        <div className="text-xl font-semibold">View &rarr;</div>
                      </GradientText>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
        {/* Weding Web */}
        <div className="flex justify-center items-center py-8">
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-300 h-120" spotlightColor="rgba(226, 0, 255, 1)">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-12 items-center gap-12">
                {/* 1. KOLOM KANAN (SEKARANG DI KIRI) */}
                <div className="col-span-8 text-start">
                  <h3 className="text-3xl font-bold mb-4">Wedding Web - Web-based digital invitations</h3>
                  <p className="text-lg mb-4">Create a web-based digital invitation website to make it easier for someone to invite people who are far away without having to use physical invitations.</p>
                  <div className="flex item-center ">
                    <a href="https://www.instagram.com/p/DO_auMyE8zC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                      <GradientText colors={['#d40000', '#460fd0', '#d40000', '#460fd0']} animationSpeed={3} showBorder={false} className="px-6 py-3 border rounded-lg shadow-sm cursor-target hover:y-1 hover:scale-102 transition-all">
                        <div className="text-xl font-semibold">View &rarr;</div>
                      </GradientText>
                    </a>
                  </div>
                </div>

                {/* 2. KOLOM KIRI (SEKARANG DI KANAN) */}
                <div className="col-span-4 flex justify-center">
                  <TiltedCard
                    imageSrc="/assets/images/portfolio/post-wedding01.jpg"
                    altText="Wedding Web"
                    captionText="Wedding - Web"
                    containerHeight="400px"
                    containerWidth="300px"
                    imageHeight="400px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={<p className="tilted-card-demo-text text-xl font-semibold text-[#ffffff]">Wedding Web</p>}
                  />
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
        {/* Lartz Bank */}
        <div className="flex justify-center items-center py-8">
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-300 h-120" spotlightColor="rgba(34, 255, 0, 0.8)">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-12 items-center gap-12">
                {/* 1. KOLOM KIRI */}
                <div className="col-span-4 flex justify-center">
                  <TiltedCard
                    imageSrc="/assets/images/portfolio/lartzbank.jpg"
                    altText="Lartz Bank"
                    captionText="LartzBank - Prototype"
                    containerHeight="400px"
                    containerWidth="300px"
                    imageHeight="400px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={<p className="tilted-card-demo-text text-xl font-semibold text-[#ffffff]">Lartz Bank</p>}
                  />
                </div>

                {/* 2. KOLOM KANAN */}
                <div className="col-span-8 text-start">
                  <h3 className="text-3xl font-bold mb-4">Lartz Bank - Financial applications</h3>
                  <p className="text-lg mb-4">
                    LartzBank is a mobile banking application that can carry out transactions and other financial needs, Regular Cards and Black Cards are available which have their own advantages for their users.
                  </p>
                  {/* <ul className="list-disc list-inside text-lg mb-6 ml-4">
                    <li>**Peran:** Full-stack Developer, UI/UX Designer</li>
                    <li>**Teknologi:** Next.js, React, Tailwind CSS, Lenis Scroll, GSAP</li>
                    <li>**Status:** Live</li>
                  </ul> */}
                  <div className="flex item-center ">
                    <a href="https://www.instagram.com/p/DFNtCH_TQsm/?img_index=1" target="_blank" rel="noopener noreferrer">
                      <GradientText colors={['#d40000', '#460fd0', '#d40000', '#460fd0']} animationSpeed={3} showBorder={false} className="px-6 py-3 border rounded-lg shadow-sm cursor-target hover:y-1 hover:scale-102 transition-all">
                        <div className="text-xl font-semibold">View &rarr;</div>
                      </GradientText>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
        {/* portfolio old */}
        <div className="flex justify-center items-center py-8">
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-300 h-120" spotlightColor="rgba(255, 125, 0, 0.8)">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-12 items-center gap-12">
                {/* 1. KOLOM KANAN (SEKARANG DI KIRI) */}
                <div className="col-span-8 text-start">
                  <h3 className="text-3xl font-bold mb-4">Old Portfolio - My Potfolio V1</h3>
                  <p className="text-lg mb-4">This portfolio was created in early 2025, which is my first portfolio that still uses standard programming languages.</p>
                  <div className="flex item-center ">
                    <a href="https://lartz-portofolio.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <GradientText colors={['#d40000', '#460fd0', '#d40000', '#460fd0']} animationSpeed={3} showBorder={false} className="px-6 py-3 border rounded-lg shadow-sm cursor-target hover:y-1 hover:scale-102 transition-all">
                        <div className="text-xl font-semibold">View &rarr;</div>
                      </GradientText>
                    </a>
                  </div>
                </div>

                {/* 2. KOLOM KIRI (SEKARANG DI KANAN) */}
                <div className="col-span-4 flex justify-center">
                  <TiltedCard
                    imageSrc="/assets/images/portfolio/portfolio01.jpg"
                    altText="Portfolio Old"
                    captionText="Portfolio Old - Web"
                    containerHeight="400px"
                    containerWidth="300px"
                    imageHeight="400px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={<p className="tilted-card-demo-text text-xl font-semibold text-[#ffffff]">Portfolio Old</p>}
                  />
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>

      {/* SKILLS */}

      <div className="bg-black py-20 text-white relative z-10 overflow-x-hidden">
        <div className="container items-center mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-8 text-center text-[#460fd0]">My Skills</h2>
          <p className="text-center text-lg">I have several hard skills ranging from the tech stack to editing photos or videos</p>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <SpotlightCard className="custom-spotlight-card cursor-target hover:y-1 hover:scale-105 transition-all w-40 h-50" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="flex flex-col items-center justify-center text-center p-1 ">
                <img src="/assets/images/logoskills/logocpp.png" alt="Logo Sklills" className="w-20 h-20 mb-3 rounded-full hover:y-1 hover:scale-105 transition-all" />
                <h3 className="text-xl font-semibold mb-2">C++</h3>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card cursor-target hover:y-1 hover:scale-105 transition-all w-40 h-50" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="flex flex-col items-center justify-center text-center p-1 ">
                <img src="/assets/images/logoskills/logojsp.png" alt="Logo Sklills" className="w-20 h-20 mb-3 rounded-full hover:y-1 hover:scale-105 transition-all" />
                <h3 className="text-xl font-semibold mb-2">JSP</h3>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card cursor-target hover:y-1 hover:scale-105 transition-all w-40 h-50" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="flex flex-col items-center justify-center text-center p-1 ">
                <img src="/assets/images/logoskills/logojs.png" alt="Logo Sklills" className="w-20 h-20 mb-3 rounded-full hover:y-1 hover:scale-105 transition-all" />
                <h3 className="text-xl font-semibold mb-2">JS</h3>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card cursor-target hover:y-1 hover:scale-105 transition-all w-40 h-50" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="flex flex-col items-center justify-center text-center p-1 ">
                <img src="/assets/images/logoskills/logomysql.png" alt="Logo Sklills" className="w-20 h-20 mb-3 rounded-full hover:y-1 hover:scale-105 transition-all" />
                <h3 className="text-xl font-semibold mb-2">MySql</h3>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card cursor-target hover:y-1 hover:scale-105 transition-all w-40 h-50" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="flex flex-col items-center justify-center text-center p-1 ">
                <img src="/assets/images/logoskills/logophp.png" alt="Logo Sklills" className="w-20 h-20 mb-3 rounded-full hover:y-1 hover:scale-105 transition-all" />
                <h3 className="text-xl font-semibold mb-2">PHP</h3>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card cursor-target hover:y-1 hover:scale-105 transition-all w-40 h-50" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="flex flex-col items-center justify-center text-center p-1 ">
                <img src="/assets/images/logoskills/logoreactjs.png" alt="Logo Sklills" className="w-20 h-20 mb-3 rounded-full hover:y-1 hover:scale-105 transition-all" />
                <h3 className="text-xl font-semibold mb-2">React</h3>
              </div>
            </SpotlightCard>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <SpotlightCard className="custom-spotlight-card cursor-target hover:y-1 hover:scale-105 transition-all w-40 h-50" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="flex flex-col items-center justify-center text-center p-1 ">
                <img src="/assets/images/logoskills/logots.png" alt="Logo Sklills" className="w-20 h-20 mb-3 hover:y-1 hover:scale-105 transition-all" />
                <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card cursor-target hover:y-1 hover:scale-105 transition-all w-40 h-50" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="flex flex-col items-center justify-center text-center p-1 ">
                <img src="/assets/images/logoskills/logopostgre.png" alt="Logo Sklills" className="w-20 h-20 mb-3 rounded-full hover:y-1 hover:scale-105 transition-all" />
                <h3 className="text-xl font-semibold mb-2">PostgreSql</h3>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card cursor-target hover:y-1 hover:scale-105 transition-all w-40 h-50" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="flex flex-col items-center justify-center text-center p-1 ">
                <img src="/assets/images/logoskills/logonextjs.png" alt="Logo Sklills" className="w-20 h-20 mb-3 rounded-full hover:y-1 hover:scale-105 transition-all" />
                <h3 className="text-xl font-semibold mb-2">NEXT JS</h3>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card cursor-target hover:y-1 hover:scale-105 transition-all w-40 h-50" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="flex flex-col items-center justify-center text-center p-1 ">
                <img src="/assets/images/logoskills/logosolid.png" alt="Logo Sklills" className="w-20 h-20 mb-3 hover:y-1 hover:scale-105 transition-all" />
                <h3 className="text-xl font-semibold mb-2">Solidity</h3>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card cursor-target hover:y-1 hover:scale-105 transition-all w-40 h-50" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="flex flex-col items-center justify-center text-center p-1 ">
                <img src="/assets/images/logoskills/logops.png" alt="Logo Sklills" className="w-20 h-20 mb-3 hover:y-1 hover:scale-105 transition-all" />
                <h3 className="text-xl font-semibold mb-2">Photoshop</h3>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card cursor-target hover:y-1 hover:scale-105 transition-all w-40 h-50" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="flex flex-col items-center justify-center text-center p-1 ">
                <img src="/assets/images/logoskills/logopr.png" alt="Logo Sklills" className="w-20 h-20 mb-3 hover:y-1 hover:scale-105 transition-all" />
                <h3 className="text-xl font-semibold mb-2">Premiere Pro</h3>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </div>
  );
}
