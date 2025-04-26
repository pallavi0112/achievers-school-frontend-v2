import React from 'react'
import { Breadcrumb } from '@/interfaces'
import Links from '@/components/Links'
import Banner from '@/components/Banner';
import SubTitle from '@/components/SubTitle';
import Title from '@/components/Title';
import StreamTable from '@/components/StreamTable';

const breadcrumbs: Breadcrumb[] = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/admission/academic-streams-xi-xii" },
    { label: "Welcome to AIS", url: "/admission/academic-streams-xi-xii" },
];
const subjects = [
    { id: 1, name: "English Core" },
    { id: 2, name: "History" },
    { id: 3, name: "Economics" },
    { id: 4, name: "Hindi Core" },
    { id: 5, name: "Political Science" },
    { id: 6, name: "Physical Education" },
  ];
const AcademicStreams = () => {
    return (
        <>
            <Banner backgroundImage="/images/Section.png" pageTitle="ACADEMIC STREAMS (XI & XII)" breadcrumbs={breadcrumbs} />
            <Links/>
            <section className="max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px] md:py-[50px] py-[24px] bg-[#F6F6FF]">
                <SubTitle subTitle="Welcome to," textAlign="left" />
                <Title title="Achievers International School!" textAlign="left" />
                <StreamTable streamName="Arts" subjects={subjects} />
            
            </section>
        </>
    )
}

export default AcademicStreams