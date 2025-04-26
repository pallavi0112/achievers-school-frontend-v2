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
      <Links/>
      <section className="max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px] md:py-[50px] py-[24px] bg-[#F6F6FF]">
        <SubTitle subTitle="Discover Our" textAlign="left" />
        <Title title="Laboratories" textAlign="left" />
        <ContentCard
          image="/images/Content.png"
          alt="Welcome to AIS"
          imageLeft={true}
          description={
            <>
              <div className="text-[#525252] font-inter text-[16px] md:text-[18px] font-normal font-medium leading-[140%]">
                <p className="mb-8">
                  Hands-on experience is at the heart of scientific learning at
                  Achievers International School. Our labs are designed to
                  ignite curiosity and enhance conceptual understanding through
                  active exploration and experimentation.
                </p>
                <p className="mb-8">
                  From Biology to Chemistry and Physics, our well-equipped
                  laboratories provide a safe and stimulating environment for
                  students to observe, analyze, and discover scientific
                  principles in action. Supervised by qualified faculty,
                  students engage in practical work that reinforces classroom
                  learning and fosters a spirit of inquiry.
                </p>
                <p>
                  We ensure that our lab sessions go beyond routine experiments,
                  encouraging critical thinking, collaborative learning, and
                  real-world application. Safety protocols are strictly
                  followed, and our facilities are regularly updated to align
                  with evolving curriculum standards.
                </p>
              </div>
            </>
          }
        />
      </section>
    </>
  );
};

export default Laboratories;
