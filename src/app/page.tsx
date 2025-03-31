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
        subtitle="OUR AIM"
        title="ACHIEVERS INTERNATIONAL SCHOOL"
        paragraphs={[
          "Welcome to Achievers International School. We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.Welcome to Achievers International School. We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.",
          "Welcome to Achievers International School. We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.Welcome to Achievers International School. We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.",
          // "Welcome to Achievers International School. We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.Welcome to Achievers International School. We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.",
          // "Welcome to Achievers International School. We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.Welcome to Achievers International School. We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.",
          // "Welcome to Achievers International School. We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.Welcome to Achievers International School. We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.",
          "We strive to provide highest quality education, bridging your child's success with infrastructure of knowledge and creativity.",
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
