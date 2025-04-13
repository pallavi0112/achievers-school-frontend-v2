import React from "react";
import Banner from "@/components/Banner";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import ContentCard from "@/components/ContentCard";
import { Breadcrumb } from "@/interfaces";

const breadcrumbs: Breadcrumb[] = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about-us/welcome-to-ais" },
    { label: "Welcome to AIS", url: "/about-us/welcome-to-ais" },
];

const WelcomeToAIS = () => {
    return (
        <>
            <Banner backgroundImage="/images/Section.png" pageTitle="Welcome to AIS" breadcrumbs={breadcrumbs} />
            <section className="max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px] md:py-[50px] py-[24px] bg-[#F6F6FF]">
                <SubTitle subTitle="Welcome to," textAlign="left" />
                <Title title="Achievers International School!" textAlign="left" />
                <ContentCard
                    image="/images/Content.png"
                    alt="Welcome to AIS"
                    imageLeft={true}
                    description={
                        <>
                            <p className="mb-4 text-[16px] md:text-[18px] text-[#000] text-justify">Welcome to Achievers International School, where education is more than just academics — it&apos;s about inspiring young minds to dream, discover, and achieve. Nestled amidst lush greenery, our campus offers a peaceful environment that nurtures growth, curiosity, and creativity.</p>
                            <p className="mb-4 text-[16px] md:text-[18px] text-[#000] text-justify">At Achievers International School, we believe that every child is unique, brimming with potential, and capable of extraordinary achievements when given the right guidance and support. Our mission is to provide a learning experience beyond textbooks, blending academic rigour with personal growth and life skills.</p>
                            <p className="mb-4 text-[16px] md:text-[18px] text-[#000] text-justify">We take pride in our state-of-the-art infrastructure, designed to provide students with the best tools for exploration and discovery. From cutting-edge science labs and technology centres to vibrant art studios and expansive sports fields, our facilities create an environment that balances intellectual, physical, and creative development. As the first AI-integrated classrooms in the region and ranked No. 1 CBSE school, we strive to stay ahead in providing an extraordinary learning experience.</p>
                        </>
                    }
                    />
                <div>
                    <p className="mb-4 text-[16px] md:text-[18px] text-[#000] text-justify">Our exceptional faculty is committed to igniting curiosity and shaping independent thinkers. Through personalised attention and innovative teaching methods, we empower students to embrace challenges confidently and with compassion, preparing them for a future without limits.</p>
                    <p className="mb-4 text-[16px] md:text-[18px] text-[#000] text-justify">The success of our students speaks for itself. Their outstanding academic achievements and accolades in sports, arts, and cultural events have earned Achievers International School a distinguished reputation in the region. We are proud to be a beacon of excellence, shaping tomorrow&apos;s leaders, thinkers, and innovators.</p>
                    <p className="mb-4 text-[16px] md:text-[18px] text-[#000] text-justify"><strong>Join us in building a community where knowledge lights the path and every child embarks on a journey of self-discovery and success.</strong></p>
                </div>
            </section>
        </>
    );
};

export default WelcomeToAIS;
