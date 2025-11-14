import dynamic from 'next/dynamic';
import Image from 'next/image';
import GradientText from './components/GradientText/GradientText';
import StarBorder from './components/StarBorder/StarBorder';
import SpotlightCard from './components/SpotlightCard/SpotlightCard';
import ScrollStack from './components/ScrollStack/ScrollStack';
import TiltedCard from './components/TiltedCard/TiltedCard';
import React from 'react';
import { useRef } from 'react';
import VariableProximity from './components/VariableProximity/VariableProximity';

import ShinyTextWrapper from './components/ShinyTextWrapper';
import ElectricBorderWrapper from './components/ElectricBorderWrapper';
import ParticlesWrapper from './components/ParticlesWrapper';
import LightRaysWrapper from './components/LightRaysWrapper';
import CarouselWrapper from './components/CarouselWrapper';
import PillNavWrapper from './components/PillNavWrapper';
import RotatingTextWrapper from './components/RotatingTextWrapper';
import SplitTextWrapper from './components/SplitTextWrapper';
import BlurTextWrapper from './components/BlurTextWrapper';
import AnimatedContentWrapper from './components/AnimatedContentWrapper';
import LogoLoopWrapper, { LogoItemProp } from './components/LogoLoopWrapper';
import DecayCardWrapper from './components/DecayCardWrapper';
import LanyardWrapper from './components/LanyardWrapper';
import SquaresWrapper from './components/SquaresWrapper';
import StickerPeelWrapper from './components/StickerPeelWrapper';
import TargetCursorWrapper from './components/TargetCursorWrapper';

interface LogoItem {
  node: React.ReactNode;
  title: string; // Hapus tanda '?'
  href: string; // Hapus tanda '?'
  // Tambahkan 'id' jika diperlukan untuk keying
  id?: number | string;
}
const runningTextData: LogoItemProp[] = [
  {
    node: <span className="text-xl font-extrabold uppercase ...">THIS IS NOT A COST.</span>,
    title: 'Cost Text', // Wajib
    href: '#', // Wajib
  },
  {
    node: <span className="text-xl font-extrabold uppercase ...">THIS IS A PERMANENT INVESTMENT IN THE FUTURE OF YOUR BUSINESS.</span>,
    title: 'Investment Text', // Wajib
    href: '#', // Wajib
  },
  {
    node: (
      <div className="flex items-center">
        <img src="/assets/logo/rotate-img.png" alt="Rotate Separator" className="h-10 mt-3 w-auto object-contain mx-4" />
      </div>
    ),
    title: 'Separator Image', // Wajib diisi meskipun placeholder
    href: '#', // Wajib diisi
  },
];

const logo = '/assets/logo/lartz-logo-col.png';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <a
        href="https://wa.me/6285180772795?text=Halo,%20saya%20tertarik%20dengan%20Anda."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 transition-transform duration-300 hover:scale-110 cursor-pointer animate-whatsapp-shake"
        aria-label="Chat via WhatsApp"
      >
        <img src="/assets/logo/whatsapp-icon.png" alt="WhatsApp Chat" className="w-16 h-16 rounded-full shadow-lg" />
      </a>
      <div>
        <TargetCursorWrapper spinDuration={2} hideDefaultCursor={true} />
      </div>

      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden">
        <SquaresWrapper
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#d00f0f"
        />
      </div>

      <div className="absolute top-0 right-0 z-40 pointer-events-none hidden md:block" style={{ height: '400px', width: '50vw', maxWidth: '800px' }}>
        <LanyardWrapper position={[0, 0, 12]} gravity={[0, -40, 0]} />
      </div>

      <StickerPeelWrapper imageSrc="/assets/logo/lartz-logo-col.png" width={200} initialPosition={{ x: -100, y: 100 }} className="absolute top-20 right-10 z-40 hidden md:block" />

      <PillNavWrapper
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '#' },
          { label: 'About', href: '#about' },
          { label: 'Portfolio', href: '#portfolio' },
          { label: 'Contact', href: '#contact' },
        ]}
        activeHref="/"
        className="fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto custom-nav py-4 md:py-6 px-4"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />

      {/* Konten Utama */}
      <div className="container mx-auto min-h-screen overflow-x-hidden p-4 md:p-8 pt-20 md:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* KOLOM KANAN (Tempat foto profil untuk mobile) */}
          <div className="col-span-full md:col-span-5 relative overflow-x-hidden order-1 md:order-2">
            <div className=" md:hidden flex justify-center py-8">
              <div className="w-48 h-48 rounded-full bg-gray-700 overflow-hidden shadow-2xl">
                <img src="/assets/logo/profile-mobile.png" alt="Latif Palikal Isbah" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* KOLOM KIRI (Teks) */}
          <div className="col-span-full md:col-span-7 order-2 md:order-1">
            <div className="flex items-center text-center md:text-left md:h-full py-8 md:py-0 md:justify-end">
              <div className="flex flex-col gap-6 w-full mx-auto text-center md:text-left">
                <AnimatedContentWrapper distance={150} direction="horizontal" reverse={false} duration={1.2} ease="bounce.out" initialOpacity={0.2} animateOpacity scale={1.1} threshold={0.2} delay={0.3}>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <h1 className="text-xl sm:text-2xl font-bold text-white">I'am Ready For </h1>
                    <RotatingTextWrapper
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
                </AnimatedContentWrapper>

                <div className="flex flex-col items-center md:items-start ">
                  <SplitTextWrapper
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
                  <SplitTextWrapper
                    text="Software Engineer Student"
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
                <div className="flex flex-col w-full items-center md:items-start relative z-10">
                  <p className="text-lg sm:text-xl mb-8 text-center md:text-start text-white">
                    I am a software engineering student with expertise in programming and data management. I have experience working on projects both independently and in teams.
                  </p>
                </div>

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
      <div style={{ height: 'auto', position: 'relative', overflow: 'hidden' }} className="py-0 w-full bg-black ">
        <LogoLoopWrapper logos={runningTextData} speed={40} direction="left" scaleOnHover={false} logoHeight={40} gap={30} pauseOnHover fadeOut fadeOutColor="#ffffff" ariaLabel="Lartz" />
      </div>

      {/* ABOUT */}
      <div className="bg-black py-12 md:py-20 text-white relative z-10 " id="about">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <LightRaysWrapper raysOrigin="top-center" raysColor="#ffffff" raysSpeed={1.5} lightSpread={0.6} rayLength={1.5} pulsating={true} mouseInfluence={1} />
        </div>
        <div className="container mx-auto px-4 mt-10">
          {/* Menggunakan grid-cols-1 di mobile, md:grid-cols-12 di tablet ke atas */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
            {/* Kolom Kiri: Card */}
            <div className="col-span-full md:col-span-4 flex justify-center md:justify-start">
              <DecayCardWrapper width={300} height={400} image="/assets/foto/pc-1.jpg">
                <h2 className="text-3xl font-extrabold text-white">
                  Lartz
                  <br />
                  Dev
                </h2>
              </DecayCardWrapper>
            </div>

            {/* Kolom Kanan: Teks */}

            <div className="col-span-full md:col-span-8 mt-5 text-center md:text-start">
              {/* Judul */}
              <h3>
                <ShinyTextWrapper text="I Develop Applications and also as a graphic designer!" disabled={false} speed={3} className="text-3xl sm:text-4xl font-semibold mb-4 text-[#460fd0]" />
              </h3>

              {/* Paragraf Deskripsi */}
              <p className="text-base sm:text-lg mb-4 ">
                I am Latif Palikal Isbah, a developer and editor and computer science student. I have created various projects carried out individually and in teams. Apart from that, I have quite good soft skills in communicating.
              </p>
              <p className="text-base sm:text-lg mb-4 ">Not only creating applications but also learning how to organize the infrastructure of an application properly so that it is comfortable for users.</p>
              <p className="text-base sm:text-lg mb-4">Sufficient mastery of language programs commonly used by industry.</p>

              {/* Tombol Portfolio */}

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
        <div style={{ height: 'auto', position: 'relative', overflow: 'hidden' }} className="py-0 w-full bg-black mt-5">
          <LogoLoopWrapper logos={runningTextData} speed={40} direction="left" scaleOnHover={false} logoHeight={40} gap={30} pauseOnHover fadeOut fadeOutColor="#ffffff" ariaLabel="Lartz" />
        </div>
      </div>
      {/* RECENT PROJECT */}
      <div className="bg-black py-5 md:py-20 text-white relative z-10 overflow-x-hidden" id="portfolio">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ParticlesWrapper
            particleCount={500}
            particleSpread={30}
            speed={0.1}
            particleColors={['#d00f0f', '#460fd0', '#ffffff']} // Sesuaikan dengan warna tema Anda
            moveParticlesOnHover={true}
            particleHoverFactor={0.3}
            alphaParticles={true}
            particleBaseSize={300}
          />
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-8 text-center text-[#460fd0]">Recent Project</h2>
          <p className="text-center text-lg mb-16 text-gray-400">This is a project that I worked on both individually and as a team</p>
        </div>

        {/* ========================================================================= */}
        {/* Insan AI (Gambar Kiri - Desktop) */}
        {/* ========================================================================= */}
        <div className="flex justify-center items-center py-8 ">
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-full max-w-7xl ml-2 mr-2" spotlightColor="rgba(106, 0, 255, 1)">
            {/* Perubahan: px-8 di mobile, md:px-4 di desktop */}
            <div className="container mx-auto **px-8 md:px-4** ">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12 ">
                {/* 1. KOLOM GAMBAR (order-1 di mobile) */}
                <div className="col-span-full md:col-span-4 flex justify-center **order-1** ">
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
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-full max-w-7xl ml-2 mr-2" spotlightColor="rgba(212, 38, 25, 1)">
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
                    imageSrc="/assets/images/portfolio/suvarna.jpg"
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
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-full max-w-7xl ml-2 mr-2" spotlightColor="rgba(32, 27, 200, 1)">
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
        <div className="flex justify-center md:justify-start items-center py-8">
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-full max-w-7xl ml-2 mr-2" spotlightColor="rgba(226, 0, 255, 1)">
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
          <SpotlightCard className="ccustom-spotlight-card hover:y-1 hover:scale-102 transition-all w-full max-w-7xl ml-2 mr-2" spotlightColor="rgba(34, 255, 0, 0.8)">
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
          <SpotlightCard className="custom-spotlight-card hover:y-1 hover:scale-102 transition-all w-full max-w-7xl ml-2 mr-2" spotlightColor="rgba(255, 125, 0, 0.8)">
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
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <CarouselWrapper autoplay={true} autoplayDelay={3000} pauseOnHover={true} loop={true} round={false} />
          </div>
        </div>
      </div>

      {/* SKILLS */}

      <div className="bg-black py-20 text-white relative z-10 overflow-x-hidden">
        <div className="container items-center mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-8 text-center text-[#460fd0]">My Skills</h2>
          <p className="text-center text-lg text-gray-400">I have several hard skills ranging from the tech stack to editing photos or videos</p>

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

      <div id="contact" className="bg-black py-20 text-white relative z-10 overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Judul dan Deskripsi */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#460fd0]">Contact</h2>
            <p className="text-lg text-gray-400">Interested in discussing a project or job opportunity? Please contact me using the form below.</p>
          </div>

          {/* --- Konten Kontak: Terbagi menjadi 2 Kolom (Info & Form) --- */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Kolom Kiri: Informasi Kontak */}
            <div className="md:w-1/3 space-y-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">Social Media Account</h3>

              {/* Kartu Info 1: Github */}
              <a href="https://github.com/Latiffhl" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition duration-300">
                <img src="/assets/logo/github-icon.png" alt="Linkedin Icon" className="w-8 h-8 mt-1" />
                <div>
                  <p className="text-sm font-light text-gray-400">Github</p>
                  <a href="latiffalikal@gmail.com" className="text-lg font-medium hover:text-[#d00f0f]">
                    latiffhl
                  </a>
                </div>
              </a>

              {/* Kartu Info 2: Telepon */}
              <a href="https://www.instagram.com/latiffhalik_22/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition duration-300">
                <img src="/assets/logo/ig-icon.png" alt="Linkedin Icon" className="w-8 h-8 mt-1" />
                <div>
                  <p className="text-sm font-light text-gray-400">Instagram</p>
                  <p className="text-lg font-medium">@latiffhalik_22</p>
                </div>
              </a>

              {/* Kartu Info 3: Lokasi */}
              <a href="https://www.linkedin.com/in/latiffalikal/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition duration-300">
                <img src="/assets/logo/linkedin-icon.png" alt="Linkedin Icon" className="w-8 h-8 mt-1" />
                <div>
                  <p className="text-sm font-light text-gray-400">Linkedin</p>
                  <p className="text-lg font-medium">Latif Palikal</p>
                </div>
              </a>
            </div>

            {/* Kolom Kanan: Formulir Kontak */}
            <ElectricBorderWrapper color="#00AEEF" speed={1.5} chaos={0.8} thickness={3} className="md:w-2/3 bg-gray-800 p-8 rounded-xl shadow-2xl " style={{ borderRadius: '16px' }}>
              <div>
                {/* Mengoreksi judul: Send Massage -> Send Message */}
                <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

                {/* PERUBAHAN UTAMA: action diatur ke endpoint Formspree Anda */}
                <form action="https://formspree.io/f/mqawagqj" method="POST" className="space-y-6">
                  {/* --- Input Tersembunyi untuk Subjek Email (Opsional) --- */}
                  <input type="hidden" name="_subject" value="Pesan Baru dari Portfolio Anda" />

                  {/* Nama */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-[#460fd0] focus:border-[#460fd0] transition duration-200"
                      placeholder="Input your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-[#460fd0] focus:border-[#460fd0] transition duration-200"
                      placeholder="name@example.com"
                    />
                  </div>

                  {/* Pesan */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      {/* Mengoreksi label: Massage -> Message */}
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-[#460fd0] focus:border-[#460fd0] transition duration-200"
                      placeholder="Write your message here..."
                    />
                  </div>

                  {/* Tombol Kirim */}
                  <button type="submit" className="w-full text-white font-bold py-3 rounded-lg bg-[#460fd0] hover:bg-[#340c9f] transition duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </ElectricBorderWrapper>
          </div>
        </div>
      </div>
      <footer className="bg-black border-t border-gray-800 text-white relative z-20">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Bagian Kiri: Hak Cipta & Credit */}
            <div className="text-center md:text-left text-sm text-gray-400">
              <p className="mb-1">2025 Latif Palikal Isbah. All rights reserved.</p>
            </div>

            {/* Bagian Tengah: Logo Sederhana */}
            <div className="text-2xl font-bold text-[#460fd0]">LARTZ</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
