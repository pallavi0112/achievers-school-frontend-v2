import React from 'react';
import Banner from '@/components/Banner';
import SubTitle from '@/components/SubTitle';
import Title from '@/components/Title';
import ContentCard from '@/components/ContentCard';
import { Breadcrumb } from '@/interfaces';
import Links from '@/components/Links';

const breadcrumbs: Breadcrumb[] = [
  { label: 'Home', url: '/' },
  { label: 'About Us', url: '/school-transport' },
  { label: 'School Transport', url: '' },
];

const Page = () => {
  return (
    <>
      <Banner
        backgroundImage="/images/Section.png"
        pageTitle="School Transport"
        breadcrumbs={breadcrumbs}
      />
      <Links/>
      <section className="max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px] md:py-[50px] py-[24px] bg-[#F6F6FF]">
        <SubTitle subTitle="Discover Our" textAlign="left" />
        <Title title="School Transport" textAlign="left" />
        <ContentCard
          image="/images/F5.jpeg"
          alt="School Transport"
          imageLeft={true}
          description={
            <>
              <div className="text-[#525252] font-inter text-[16px] md:text-[18px] font-normal font-medium leading-[140%]">
                <p className="mb-8">
                  At Achievers International School, the safety and convenience
                  of our students are a top priority. Our well-organized
                  transport system ensures timely, comfortable, and secure
                  travel to and from school.
                </p>
                <p className="mb-8">
                  We operate a fleet of well-maintained buses, each equipped
                  with GPS tracking, first-aid kits, and trained staff to ensure
                  a smooth and reliable commute. Every route is carefully
                  planned to cover key areas, minimizing travel time while
                  maximizing efficiency and care.
                </p>
                <p>
                  With safety protocols in place and attentive supervision,
                  parents can rest assured that their children are in safe hands
                  — every step of the way.
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
