import Image from 'next/image';

import RotatingText from './components/RotatingText/RotatingText';
import SplitText from './components/SplitText/SplitText';
import BlurText from './components/BlurText/BlurText';
import AnimatedContent from './components/AnimatedContent/AnimatedContent';
import Squares from './components/Squares/Squares';
import dynamic from 'next/dynamic';
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

const DynamicTargetCursor = dynamic(() => import('./components/TargetCursor/TargetCursor'), {
  ssr: false,
  loading: () => null,
});

const DynamicLanyard = dynamic(() => import('./components/Lanyard/Lanyard'), {
  ssr: false,
  loading: () => null,
});
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

      <div className="container mx-auto min-h-screen overflow-x-hidden p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div
            className="col-span-full md:col-span-6 relative overflow-x-hidden 
                         order-1 md:order-2"
          >
            <div className="hidden md:block">
              <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            </div>

            <div className=" md:hidden flex justify-center py-8">
              <div className="w-48 h-48 rounded-full bg-gray-700 overflow-hidden shadow-2xl">
                <img src="/assets/foto-latif.jpg" alt="Latif Palikal Isbah" className="w-full h-full object-cover" />
              </div>
            </div>

            <StickerPeel imageSrc="/assets/logo/lartz-logo-col.png" width={200} initialPosition={{ x: -100, y: 100 }} className="absolute top-10 right-10 hidden md:block" />
          </div>

          <div className="col-span-full md:col-span-6 order-2 md:order-1">
            <div className="flex items-center md:h-full py-8 md:py-0">
              <div className="flex flex-col gap-6 w-full text-center md:text-left">
                <AnimatedContent distance={150} direction="horizontal" reverse={false} duration={1.2} ease="bounce.out" initialOpacity={0.2} animateOpacity scale={1.1} threshold={0.2} delay={0.3}>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <h1 className="text-xl sm:text-2xl font-bold text-white">I'am Ready For </h1>
                    <RotatingText
                      texts={['Graphic Design', 'Web Developer', 'Web3 Enthusiast', 'Creative Coder']}
                      mainClassName="px-2 bg-[#d00f0f] text-black overflow-hidden py-0.5 rounded-lg text-xl sm:text-2xl font-bold inline-flex transition-all"
                      staggerFrom={'last'}
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '-120%' }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5"
                      transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>

                <div className="flex flex-col items-center md:items-start ">
                  <SplitText
                    text="I'am Latif Palikal Isbah"
                    className="text-4xl sm:text-5xl font-semibold text-start md:text-start"
                    delay={50}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                  />
                  <SplitText
                    text="Software Engineer"
                    className="text-4xl sm:text-5xl font-semibold text-center md:text-start text-[#460fd0]"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                  />
                </div>
                <BlurText
                  text="I am a software engineering student with expertise in programming and data management. I have experience working on projects both independently and in teams."
                  delay={75}
                  animateBy="words"
                  direction="top"
                  className="text-lg sm:text-xl mb-8 text-center md:text-left"
                />

                {/* Tombol Contact Now */}
                <div className="flex item-center justify-center md:justify-start">
                  <GradientText colors={['#d00f0f', '#3b23f1', '#d00f0f', '#3b23f1', '#d00f0f']} animationSpeed={3} showBorder={false} className="px-8 py-4 rounded-lg border cursor-target text-lg">
                    Contact Now!
                  </GradientText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 'auto', position: 'relative', overflow: 'hidden' }} className="py-12 w-full bg-black">
        <LogoLoop logos={techLogos} speed={120} direction="left" logoHeight={40} gap={30} pauseOnHover scaleOnHover fadeOut fadeOutColor="#ffffff" ariaLabel="Technology partners" />
      </div>

      {/* ABOUT */}
      <div className="bg-black py-12 md:py-20 text-white relative z-10 overflow-x-hidden">
        <div className="container mx-auto px-4">
          {/* Menggunakan grid-cols-1 di mobile, md:grid-cols-12 di tablet ke atas */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
            {/* Kolom Kiri: Card */}
            {/* Mobile: col-span-12, di tengah (flex justify-center) */}
            {/* Tablet/Desktop: md:col-span-4 */}
            <div className="col-span-full md:col-span-4 flex justify-center md:justify-start">
              <DecayCard width={300} height={400} image="/assets/foto/pc-1.jpg">
                <h2 className="text-3xl font-extrabold text-white">
                  Lartz
                  <br />
                  Dev
                </h2>
              </DecayCard>
            </div>

            {/* Kolom Kanan: Teks */}
            {/* Mobile: col-span-12, rata tengah (text-center) */}
            {/* Tablet/Desktop: md:col-span-8, rata kiri (md:text-start) */}
            <div className="col-span-full md:col-span-8 mt-5 text-center md:text-start">
              {/* Judul */}
              <h3 className="text-3xl sm:text-4xl font-semibold mb-4 text-[#460fd0]">I Develop Applications and also as a graphic designer</h3>

              {/* Paragraf Deskripsi */}
              <p className="text-base sm:text-lg mb-4 ">
                I am Latif Palikal Isbah, a developer and editor and computer science student. I have created various projects carried out individually and in teams. Apart from that, I have quite good soft skills in communicating.
              </p>
              <p className="text-base sm:text-lg mb-4 ">Not only creating applications but also learning how to organize the infrastructure of an application properly so that it is comfortable for users.</p>
              <p className="text-base sm:text-lg mb-4">Sufficient mastery of language programs commonly used by industry.</p>

              {/* Tombol Portfolio */}
              {/* Di mobile harus rata tengah, jadi gunakan 'mx-auto' untuk centering inline-block */}
              <div className="mt-4 inline-block relative hover:y-1 hover:scale-105 transition-all mx-auto md:mx-0">
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
      <div className="bg-black py-12 md:py-20 text-white relative z-10 overflow-x-hidden" id="portfolio">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-8 text-center text-[#460fd0]">Recent Project</h2>
          <p className="text-center text-lg mb-16">This is a project that I worked on both individually and as a team</p>
        </div>

        {/* ========================================================================= */}
        {/* Insan AI (Gambar Kiri - Desktop) */}
        {/* ========================================================================= */}
        <div className="flex justify-center items-center py-8">
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-full max-w-7xl" spotlightColor="rgba(106, 0, 255, 1)">
            {/* Perubahan: px-8 di mobile, md:px-4 di desktop */}
            <div className="container mx-auto **px-8 md:px-4**">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12">
                {/* 1. KOLOM GAMBAR (order-1 di mobile) */}
                <div className="col-span-full md:col-span-4 flex justify-center **order-1**">
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

                {/* 2. KOLOM TEKS (order-2 di mobile, rata tengah) */}
                <div className="col-span-full md:col-span-8 **text-center md:text-start order-2 md:order-none**">
                  <h3 className="text-3xl font-bold mb-4">Insan AI - Educattion Platform</h3>
                  <p className="text-lg mb-4">This project is an implementation of integrated learning materials with a focus on addressing educational needs at all levels and providing many special features.</p>
                  <div className="flex **justify-center md:justify-start** items-center">
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

        {/* ========================================================================= */}
        {/* Suvarna (Teks Kiri - Desktop) */}
        {/* ========================================================================= */}
        <div className="flex justify-center items-center py-8">
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-full max-w-7xl" spotlightColor="rgba(212, 38, 25, 1)">
            {/* Perubahan: px-8 di mobile, md:px-4 di desktop */}
            <div className="container mx-auto **px-8 md:px-4**">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12">
                {/* 1. KOLOM TEKS (order-2 di mobile, rata tengah) */}
                <div className="col-span-full md:col-span-8 **text-center md:text-start order-2 md:order-none**">
                  <h3 className="text-3xl font-bold mb-4">Suvarna - Blockchain-Based Safe & Digital Gold Investment</h3>
                  <p className="text-lg mb-4">
                    Digital gold is a digital asset whose value is backed by physical gold. Each digital gold token or unit represents ownership of a specific amount of physical gold stored in a secure storage facility.
                  </p>
                  <p className="text-lg mb-4">With Suvarna, you own gold digitally through blockchain technology, which ensures transparency, security, and ease of transactions without the need to store physical gold.</p>
                  <div className="flex **justify-center md:justify-start** items-center">
                    <a href="http://suvarna-mu.vercel.app" target="_blank" rel="noopener noreferrer">
                      <GradientText colors={['#d40000', '#460fd0', '#d40000', '#460fd0']} animationSpeed={3} showBorder={false} className="px-6 py-3 border rounded-lg shadow-sm cursor-target hover:y-1 hover:scale-102 transition-all">
                        <div className="text-xl font-semibold">View &rarr;</div>
                      </GradientText>
                    </a>
                  </div>
                </div>

                {/* 2. KOLOM GAMBAR (order-1 di mobile) */}
                <div className="col-span-full md:col-span-4 flex justify-center **order-1**">
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

        {/* ========================================================================= */}
        {/* Publartz (Gambar Kiri - Desktop) */}
        {/* ========================================================================= */}
        <div className="flex justify-center items-center py-8">
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-full max-w-7xl" spotlightColor="rgba(32, 27, 200, 1)">
            {/* Perubahan: px-8 di mobile, md:px-4 di desktop */}
            <div className="container mx-auto **px-8 md:px-4**">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12">
                {/* 1. KOLOM GAMBAR (order-1 di mobile) */}
                <div className="col-span-full md:col-span-4 flex justify-center **order-1**">
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

                {/* 2. KOLOM TEKS (order-2 di mobile, rata tengah) */}
                <div className="col-span-full md:col-span-8 **text-center md:text-start order-2 md:order-none**">
                  <h3 className="text-3xl font-bold mb-4">Publartz - publish blog by lartz</h3>
                  <p className="text-lg mb-4">A website for publishing blogs with admin, login, and CURD features. Comments are available on each blog.</p>
                  <div className="flex **justify-center md:justify-start** items-center">
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

        {/* ========================================================================= */}
        {/* Wedding Web (Teks Kiri - Desktop) */}
        {/* ========================================================================= */}
        <div className="flex justify-center items-center py-8">
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-full max-w-7xl" spotlightColor="rgba(226, 0, 255, 1)">
            {/* Perubahan: px-8 di mobile, md:px-4 di desktop */}
            <div className="container mx-auto **px-8 md:px-4**">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12">
                {/* 1. KOLOM TEKS (order-2 di mobile, rata tengah) */}
                <div className="col-span-full md:col-span-8 **text-center md:text-start order-2 md:order-none**">
                  <h3 className="text-3xl font-bold mb-4">Wedding Web - Web-based digital invitations</h3>
                  <p className="text-lg mb-4">Create a web-based digital invitation website to make it easier for someone to invite people who are far away without having to use physical invitations.</p>
                  <div className="flex **justify-center md:justify-start** items-center">
                    <a href="https://www.instagram.com/p/DO_auMyE8zC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                      <GradientText colors={['#d40000', '#460fd0', '#d40000', '#460fd0']} animationSpeed={3} showBorder={false} className="px-6 py-3 border rounded-lg shadow-sm cursor-target hover:y-1 hover:scale-102 transition-all">
                        <div className="text-xl font-semibold">View &rarr;</div>
                      </GradientText>
                    </a>
                  </div>
                </div>

                {/* 2. KOLOM GAMBAR (order-1 di mobile) */}
                <div className="col-span-full md:col-span-4 flex justify-center **order-1**">
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

        {/* ========================================================================= */}
        {/* Lartz Bank (Gambar Kiri - Desktop) */}
        {/* ========================================================================= */}
        <div className="flex justify-center items-center py-8">
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-full max-w-7xl" spotlightColor="rgba(34, 255, 0, 0.8)">
            {/* Perubahan: px-8 di mobile, md:px-4 di desktop */}
            <div className="container mx-auto **px-8 md:px-4**">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12">
                {/* 1. KOLOM GAMBAR (order-1 di mobile) */}
                <div className="col-span-full md:col-span-4 flex justify-center **order-1**">
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

                {/* 2. KOLOM TEKS (order-2 di mobile, rata tengah) */}
                <div className="col-span-full md:col-span-8 **text-center md:text-start order-2 md:order-none**">
                  <h3 className="text-3xl font-bold mb-4">Lartz Bank - Financial applications</h3>
                  <p className="text-lg mb-4">
                    LartzBank is a mobile banking application that can carry out transactions and other financial needs, Regular Cards and Black Cards are available which have their own advantages for their users.
                  </p>
                  <div className="flex **justify-center md:justify-start** items-center">
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

        {/* ========================================================================= */}
        {/* Old Portfolio (Teks Kiri - Desktop) */}
        {/* ========================================================================= */}
        <div className="flex justify-center items-center py-8">
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-full max-w-7xl" spotlightColor="rgba(255, 125, 0, 0.8)">
            {/* Perubahan: px-8 di mobile, md:px-4 di desktop */}
            <div className="container mx-auto **px-8 md:px-4**">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12">
                {/* 1. KOLOM TEKS (order-2 di mobile, rata tengah) */}
                <div className="col-span-full md:col-span-8 **text-center md:text-start order-2 md:order-none**">
                  <h3 className="text-3xl font-bold mb-4">Old Portfolio - My Potfolio V1</h3>
                  <p className="text-lg mb-4">This portfolio was created in early 2025, which is my first portfolio that still uses standard programming languages.</p>
                  <div className="flex **justify-center md:justify-start** items-center">
                    <a href="https://lartz-portofolio.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <GradientText colors={['#d40000', '#460fd0', '#d40000', '#460fd0']} animationSpeed={3} showBorder={false} className="px-6 py-3 border rounded-lg shadow-sm cursor-target hover:y-1 hover:scale-102 transition-all">
                        <div className="text-xl font-semibold">View &rarr;</div>
                      </GradientText>
                    </a>
                  </div>
                </div>

                {/* 2. KOLOM GAMBAR (order-1 di mobile) */}
                <div className="col-span-full md:col-span-4 flex justify-center **order-1**">
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
                <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
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
