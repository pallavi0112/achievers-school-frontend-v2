import React from 'react';
import Banner from '@/components/Banner';
import SubTitle from '@/components/SubTitle';
import Title from '@/components/Title';
import ContentCard from '@/components/ContentCard';
import { Breadcrumb } from '@/interfaces';
import Links from '@/components/Links';

const breadcrumbs: Breadcrumb[] = [
  { label: 'Home', url: '/' },
  { label: 'About Us', url: '/smart-class' },
  { label: 'AI-Enabled Classrooms', url: '' },
];

const SmartClass = () => {
  return (
    <>
      <Banner
        backgroundImage="/images/Section.png"
        pageTitle="AI-Enabled Classrooms"
        breadcrumbs={breadcrumbs}
      />
      <Links/>
      <section className="max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px] md:py-[50px] py-[24px] bg-[#F6F6FF]">
        <SubTitle subTitle="Experience Our" textAlign="left" />
        <Title title="AI-Enabled Classrooms" textAlign="left" />
        <ContentCard
          image="/images/Content.png"
          alt="AI-Enabled Classrooms"
          imageLeft={true}
          description={
            <>
              <>
                <div className="text-[#525252] font-inter text-[16px] md:text-[18px] font-normal font-medium leading-[140%]">
                  <p className="mb-8">
                    At Achievers International School, we believe in embracing
                    technology to enhance the learning experience. As pioneers
                    of AI-integrated classrooms in the region, we bring
                    innovation directly into the hands of our learners.
                  </p>
                  <p className="mb-8">
                    Our smart classrooms are equipped with cutting-edge tools
                    that personalize education, simplify complex concepts, and
                    foster interactive engagement. With AI-driven insights,
                    educators can better understand each student’s progress and
                    tailor their teaching to meet individual needs.
                  </p>
                  <p>
                    This integration of artificial intelligence empowers both
                    teachers and students — making learning more dynamic,
                    responsive, and future-ready. It’s not just about staying
                    ahead, but about preparing our students for a world where
                    digital fluency is essential.
                  </p>
                </div>
              </>
            </>
          }
        />
      </section>
    </>
  );
};

export default SmartClass;
