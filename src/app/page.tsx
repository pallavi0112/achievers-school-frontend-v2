import AboutCard from '@/components/AboutCard';
import AchieverCard from '@/components/AchieverCard';
import Award from '@/components/Award';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import HeroSection from '@/components/HeroSection';
import PrincipalSection from '@/components/PrincipalSection';


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutCard
        imageSrc="/images/Content.png"
        subtitle="MISSION"
        title="Achievers International School, Pratappur"
        paragraphs={[
          "Welcome to Achievers International School — a place where education meets inspiration. We are dedicated to nurturing young minds, blending academic excellence with character development to help students unlock their true potential. Our serene, green campus and state-of-the-art facilities provide the perfect environment for holistic growth, encouraging curiosity, creativity, and lifelong learning. ",
          "Join us on a journey where every child is empowered to become a confident, compassionate global citizen.",
          // "Welcome to Achievers International School. We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.Welcome to Achievers International School. We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.",
          // "Welcome to Achievers International School. We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.Welcome to Achievers International School. We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.",
          // "Welcome to Achievers International School. We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.Welcome to Achievers International School. We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.",
          // "We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.",
        ]}
      />
      <AchieverCard
        title='Why Study at Achievers International School?'
        description='At Achievers International School, we believe in excellence, innovation, and holistic development. With a strong academic foundation, expert faculty, and world-class infrastructure, we provide a nurturing environment where students thrive'
        image="/images/Content.png"
      />
      <Facilities />
      <Award/>
      <Gallery />
      {/* <NewsAndEvents /> */}
      <PrincipalSection/>
    </>
  );
}
