import React from 'react';
import { Breadcrumb } from '@/interfaces';
import Banner from '@/components/Banner';
import SubTitle from '@/components/SubTitle';
import Title from '@/components/Title';
import ContentCard from '@/components/ContentCard';
import Links from '@/components/Links';
import Link from 'next/link';

const breadcrumbs: Breadcrumb[] = [
  { label: 'Home', url: '/' },
  { label: 'About Us', url: '/admission/admission-process' },
  { label: 'Welcome to AIS', url: '/admission/admission-process' },
];

const AdmissionProcess = () => {
  return (
    <>
      <Banner
        backgroundImage="/images/Section.png"
        pageTitle="ADMISSION PROCESS"
        breadcrumbs={breadcrumbs}
      />
      <Links />
      <section className="max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px] md:py-[50px] py-[24px] bg-[#F6F6FF]">
        <SubTitle subTitle="Welcome to," textAlign="left" />
        <Title title="Achievers International School!" textAlign="left" />
        <ContentCard
          image="/images/Content.png"
          alt="Welcome to AIS"
          imageLeft={true}
          description={
            <>
              <div>
                <div>
                  <h3 className='text-[20px] text-[#212121] font-[600] font-inter'>Step 1: Enquiry</h3>
                  <p className='text-[16px] md:text-[18px] font-medium leading-[27px] text-[#525252] font-inter my-2'>
                    Begin your journey by reaching out to us. Whether you're a
                    prospective parent or student, we're here to answer your
                    questions and provide detailed information about our
                    curriculum, facilities, and admission criteria.
                  </p>
                  <Link
                    href="/admission/admission-process/enquiry"
                    className="text-[16px] md:text-[18px] text-[#0193DC] underline font-inter"
                  >
                    Generate an Enquiry
                  </Link>
                </div>
                <div className='mt-8'>
                  <h3 className='text-[20px] text-[#212121] font-[600] font-inter'>Step 2: Application</h3>
                  <p className='text-[16px] md:text-[18px] font-medium leading-[27px] text-[#525252] font-inter my-2'>
                    Once you've gathered the necessary information, proceed to
                    submit your application. This step involves providing
                    essential details and documents to help us understand your
                    aspirations and how we can support them.
                  </p>
                  <Link
                    href="/admission/admission-process/enquiry"
                    className="text-[16px] md:text-[18px] text-[#0193DC] underline font-inter"
                  >
                    Submit Your Application
                  </Link>
                </div>
              </div>
            </>
          }
        />
        <div>
          <div>
            <h3 className='text-[20px] text-[#212121] font-[600] font-inter'>Step 3: Verification & Confirmation</h3>
            <p className='text-[16px] md:text-[18px] font-medium leading-[27px] text-[#525252] font-inter my-2'>
            submitted documents. This process ensures that all information is accurate and complete. Upon successful verification, we will confirm your admission status and guide you through the next steps.
            </p>
          </div>
          <div className='mt-8'>
            <h3 className='text-[20px] text-[#212121] font-[600] font-inter'>Step 4: Commencement</h3>
            <p className='text-[16px] md:text-[18px] font-medium leading-[27px] text-[#525252] font-inter my-2'>
            With your admission confirmed, we look forward to welcoming you to the Achievers International School community. You'll receive details about orientation sessions, academic calendars, and other essential information to prepare you for the upcoming academic year.
            </p>
          </div>
          <p className='text-[16px] md:text-[18px] font-medium leading-[27px] text-[#525252] font-inter mt-8'>
          If you have any questions or need assistance, feel free to contact our admissions office or email us at: <Link href="mailto:achieversinternationalppur@gmail.com" className='text-[#0193DC]'>achieversinternationalppur@gmail.com</Link>
          </p >
        </div>
      </section>
    </>
  );
};

export default AdmissionProcess;
