import React from 'react';
import Banner from '@/components/Banner';
import SubTitle from '@/components/SubTitle';
import Title from '@/components/Title';
import ContentCard from '@/components/ContentCard';
import { Breadcrumb } from '@/interfaces';
import Links from '@/components/Links';

const breadcrumbs: Breadcrumb[] = [
  { label: 'Home', url: '/' },
  { label: 'About Us', url: '/library ' },
  { label: 'Library ', url: '' },
];

const Page = () => {
  return (
    <>
      <Banner
        backgroundImage="/images/Section.png"
        pageTitle="Library"
        breadcrumbs={breadcrumbs}
      />
      <Links/>
      <section className="max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px] md:py-[50px] py-[24px] bg-[#F6F6FF]">
        <SubTitle subTitle="Navigate Our" textAlign="left" />
        <Title title="Library " textAlign="left" />
        <ContentCard
          image="/images/F2.webp"
          alt="Library"
          imageLeft={true}
          description={
            <>
              <div className="text-[#525252] font-inter text-[16px] md:text-[18px] font-normal font-medium leading-[140%]">
                <p className="mb-8">
                  The library at Achievers International School is more than
                  just a room filled with books — it&apos;s a space designed to
                  inspire imagination, support academic growth, and nurture a
                  love for reading.
                </p>
                <p className="mb-8">
                  Stocked with a rich collection of age-appropriate books,
                  reference materials, journals, and digital resources, our
                  library caters to a wide range of interests and learning
                  needs. Whether students are researching for projects or simply
                  enjoying a quiet read, the environment promotes focused
                  learning and self-discovery.
                </p>
                <p>
                  Guided by a qualified librarian, students are encouraged to
                  explore diverse genres, build research skills, and develop a
                  lifelong appreciation for literature and knowledge.
                </p>
              </div>
            </>
          }
        />
      </section>
    </>
  );
};

export default Page;
