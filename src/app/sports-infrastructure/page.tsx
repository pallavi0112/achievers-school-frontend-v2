import React from 'react';
import Banner from '@/components/Banner';
import SubTitle from '@/components/SubTitle';
import Title from '@/components/Title';
import ContentCard from '@/components/ContentCard';
import { Breadcrumb } from '@/interfaces';
import Links from '@/components/Links';

const breadcrumbs: Breadcrumb[] = [
  { label: 'Home', url: '/' },
  { label: 'About Us', url: '/sports-infrastructure' },
  { label: 'Sports Infrastructure', url: '' },
];

const SportsInfrastructure = () => {
  return (
    <>
      <Banner
        backgroundImage="/images/Section.png"
        pageTitle="Sports Infrastructure"
        breadcrumbs={breadcrumbs}
      />
      <Links/>
      <section className="max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px] md:py-[50px] py-[24px] bg-[#F6F6FF]">
        <SubTitle subTitle="Explore Our" textAlign="left" />
        <Title title="Sports Infrastructure" textAlign="left" />
        <ContentCard
          image="/images/Content.png"
          alt="Sports Infrastructure"
          imageLeft={true}
          description={
            <>
              <div className='text-[#525252] font-inter text-[16px] md:text-[18px] font-normal font-medium leading-[140%]'>
                <p>
                  At Achievers International School, we believe that physical
                  education is just as important as academics in shaping a
                  well-rounded individual. Our school offers ample space and
                  opportunities for students to participate in a variety of
                  outdoor sports that promote teamwork, discipline, and a
                  healthy lifestyle.
                </p>
                <p className="my-8">
                  Our campus features well-maintained fields and courts that
                  support popular sports activities, including:
                </p>
                <ul className="list-disc pl-5">
                  <li className="my-2">
                    Cricket: A spacious ground equipped for regular practice and
                    friendly matches.
                  </li>
                  <li className="my-2">
                    Football: A dedicated field that encourages team play and
                    fitness.
                  </li>
                  <li className="my-2">
                    Volleyball: Courts designed for both training sessions and
                    inter-house competitions.
                  </li>
                </ul>
                <p className="mt-8">
                  These facilities provide a refreshing break from classroom
                  learning and encourage students to stay active, build
                  sportsmanship, and explore their athletic interests in a safe
                  and supportive environment.
                </p>
              </div>
            </>
          }
        />
      </section>
    </>
  );
};

export default SportsInfrastructure;
