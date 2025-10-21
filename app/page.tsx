import Image from 'next/image';
import Lanyard from './components/Lanyard/Lanyard';
import RotatingText from './components/RotatingText/RotatingText';
import SplitText from './components/SplitText/SplitText';
import BlurText from './components/BlurText/BlurText';
import AnimatedContent from './components/AnimatedContent/AnimatedContent';
import Squares from './components/Squares/Squares';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
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
              <div className="flex flex-col gap-6">
                <AnimatedContent distance={150} direction="horizontal" reverse={false} duration={1.2} ease="bounce.out" initialOpacity={0.2} animateOpacity scale={1.1} threshold={0.2} delay={0.3}>
                  <div className="flex items-center gap-2">
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
                    text="Fullstack Developer"
                    className="text-5xl font-semibold text-start text-[#d00f0f]"
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
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
