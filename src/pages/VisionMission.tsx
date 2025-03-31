import React from "react";
import Banner from "@/components/Banner";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import ContentCard from "@/components/ContentCard";
import { Breadcrumb } from "@/interfaces";

const breadcrumbs: Breadcrumb[] = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about-us/vision-mission" },
    { label: "Vision & Mission", url: "/about-us/vision-mission" },
];

const VisionMission = () => {
    return (
        <>
            <Banner backgroundImage="/images/Section.png" pageTitle="Vision & Mission" breadcrumbs={breadcrumbs} />

            <section className="px-[100px] py-[50px] bg-[#F6F6FF]">
                <SubTitle subTitle="About" textAlign="left" />
                <Title title="Our Vision" textAlign="left" />
                <ContentCard
                    image="/images/Content.png"
                    alt="Our Vision"
                    imageLeft={true}
                    description={
                        <>
                            <p className="mb-4 text-[18px] text-[#000] text-justify"><strong>“Education is the most powerful weapon which you can use to change the world.” — Nelson Mandela</strong></p>
                            <p className="mb-4 text-[18px] text-[#000] text-justify">At Achievers International School, our vision is to nurture 'Happy Learners' by creating a transformative educational environment where students excel academically and grow emotionally, socially, and physically. Through innovative teaching methods, inclusive practices, and personalized support, we empower students to explore their passions, develop critical skills, and embrace lifelong learning. We strive to cultivate a vibrant community where every child can thrive, equipping them with the confidence, resilience, and compassion to shape a brighter future for themselves and society.
                            </p>
                        </>
                    }
                />
                <SubTitle subTitle="About" textAlign="right" />
                <Title title="Our Mission" textAlign="right" />
                <ContentCard
                    image="/images/Content.png"
                    alt="Our Mission"
                    imageLeft={false}
                    description={
                        <>
                            <p className="mb-4 text-[18px] text-[#000] text-justify"><strong>“Education is not the filling of a pail, but the lighting of a fire.” — William Butler Yeats</strong></p>
                            <p className="mb-4 text-[18px] text-[#000] text-justify">Our mission is to create a dynamic and inclusive learning environment that ignites curiosity, fosters creativity, and nurtures character. We aim to make quality education accessible and to provide holistic development through personalized mentorship, immersive experiences, and cutting-edge technology. As pioneers of AI-integrated classrooms and ranked No. 1 CBSE school in the region, we are committed to equipping students with the tools to navigate a complex world. We aspire to inspire a generation of ethical leaders, critical thinkers, and compassionate individuals who will contribute positively to the world around them. At Achievers International School, we believe that when our students succeed, society prospers.</p>
                        </>
                    }
                />
            </section>
        </>
    );
};

export default VisionMission;
