import React from "react";
import Banner from "@/components/Banner";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import ContentCard from "@/components/ContentCard";
import { Breadcrumb } from "@/interfaces";

const breadcrumbs: Breadcrumb[] = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about-us" },
    { label: "Welcome to AIS", url: "" },
];

const SmartClass = () => {
  return (
    <>
    <Banner backgroundImage="/images/Section.png" pageTitle="Welcome to AIS" breadcrumbs={breadcrumbs} />
    <section className="px-[100px] py-[50px] bg-[#F6F6FF]">
        <SubTitle subTitle="Welcome to," textAlign="left" />
        <Title title="Achievers International School!" textAlign="left" />
        <ContentCard
            image="/images/Content.png"
            alt="Welcome to AIS"
            imageLeft={true}
            description={
                <>
                    <p><strong>Welcome to Achievers International School.</strong> We strive to provide the highest quality education, bridging your child's success with an infrastructure of knowledge and creativity.</p>
                </>
            }
        />
    </section>
</>
  )
}

export default SmartClass