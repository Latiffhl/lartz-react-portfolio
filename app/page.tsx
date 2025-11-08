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
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full ">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#d00f0f"
        />
      </div>
      <div className="container mx-auto h-screen">
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
                <div className="flex flex-col items-start">
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
          <div className="col-span-6 relative">
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
      {/* about */}
      <div className="bg-black py-25 min-h-screen text-white relative z-10">
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
              <p className="text-lg mb-4 ">Not only creating applications but also learning how to organize the infrastructure of an application properly so that it is comfortable for users.</p>
              <p className="text-lg mb-4">Sufficient mastery of language programs commonly used by industry.</p>

              <div className="mt-4 inline-block relative hover:y-1 hover:scale-105 transition-all">
                <StarBorder as="button" className="px-6 py-3 cursor-target" color="cyan" speed="5s" thickness={2} size={48}>
                  View Portfolio
                </StarBorder>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-25 min-h-screen text-white relative z-10 border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-8 text-center text-[#d00f0f]">My Latest Projects</h2>
          <div className="grid grid-cols-12 justify-center items-center gap-6 text-center mt-10">
            <div className="col-span-3">
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                Hello World
              </SpotlightCard>
            </div>
            <div className="col-span-3">Hey there</div>
            <div className="col-span-3">Hey there</div>
            <div className="col-span-3">Hey there</div>
          </div>
        </div>
      </div>
    </div>
  );
}
