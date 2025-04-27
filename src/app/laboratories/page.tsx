import React from 'react';
import Banner from '@/components/Banner';
import SubTitle from '@/components/SubTitle';
import Title from '@/components/Title';
import ContentCard from '@/components/ContentCard';
import { Breadcrumb } from '@/interfaces';
import Links from '@/components/Links';

const breadcrumbs: Breadcrumb[] = [
  { label: 'Home', url: '/' },
  { label: 'About Us', url: '/laboratories' },
  { label: 'Laboratories', url: '' },
];

const Laboratories = () => {
  return (
    <>
      <Banner
        backgroundImage="/images/Section.png"
        pageTitle="Laboratories"
        breadcrumbs={breadcrumbs}
      />
      <Links />
      <section className="max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px] md:py-[50px] py-[24px] bg-[#F6F6FF]">
        <SubTitle subTitle="Discover Our" textAlign="left" />
        <Title title="Laboratories" textAlign="left" />
        <ContentCard
          image="/images/F3.webp"
          alt="Welcome to AIS"
          imageLeft={true}
          description={
            <>
              <SubTitle subTitle='Physics Laboratory' textAlign='left' />
              <div className="text-[#525252] mt-5 font-inter text-[16px] md:text-[18px] font-normal font-medium leading-[140%]">
                <p className="mb-8">
                  Step into a world where imagination meets scientific inquiry.
                </p>
                <p className="mb-8">
                  Our Physics Lab is a vibrant center for exploration, equipped with modern instruments that allow students to experiment with light, sound, motion, electricity, and more. Under expert supervision, students learn to design and execute experiments that explain the physical phenomena governing the universe.
                </p>
                <p className="mb-8">
                  By conducting real-time experiments, they enhance their analytical skills, develop precision, and foster a deep, lasting understanding of concepts like mechanics, optics, electromagnetism, and thermodynamics. Safety protocols are strictly followed, ensuring a secure yet stimulating environment for budding physicists.
                </p>

              </div>
            </>
          }
        />

        {/* SOmething adding */}
        <ContentCard
          image="/images/chemlab.webp"
          alt="Welcome to AIS"
          imageLeft={false}
          description={
            <>
              <SubTitle subTitle='Chemistry Laboratory' textAlign='left' />
              <div className="text-[#525252] mt-5 font-inter text-[16px] md:text-[18px] font-normal font-medium leading-[140%]">
                <p className="mb-8">
                  Where reactions spark curiosity and every solution leads to new discovery.                </p>
                <p className="mb-8">
                  Our Chemistry Lab offers a safe, spacious, and modern environment where students dive into the world of atoms, molecules, and compounds. Through carefully guided experiments, students learn about chemical reactions, organic and inorganic chemistry, acids, bases, and much more.                </p>
                <p className="mb-8">
                  Beyond just observing changes, they are trained to interpret results, make predictions, and understand the real-world applications of chemistry. All experiments are conducted under strict safety measures, with proper protective gear and close supervision to ensure a safe and engaging learning experience.                </p>

              </div>
            </>
          }
        />

        <ContentCard
          image="/images/mathlab.webp"
          alt="Welcome to AIS"
          imageLeft={true}
          description={
            <>
              <SubTitle subTitle='Mathematics Laboratory' textAlign='left' />
              <div className="text-[#525252] mt-5 font-inter text-[16px] md:text-[18px] font-normal font-medium leading-[140%]">
                <p className="mb-8">
                  Making numbers tangible and mathematics magical.   </p>             
                  <p className="mb-8">
                  The Mathematics Lab at Achievers International School is a unique space where students experience the joy of learning mathematics through hands-on activities, puzzles, games, and models.                </p>
                  <p className="mb-8">
                  Rather than relying solely on theoretical study, students interact with mathematical concepts like geometry, algebra, trigonometry, and statistics in a visual and practical manner. This active approach strengthens problem-solving abilities, logical reasoning, and fosters a positive attitude towards mathematics — turning challenges into exciting adventures.             </p>

              </div>
            </>
          }
        />
      </section>
    </>
  );
};

export default Laboratories;
