import React from "react";
import Banner from "@/components/Banner";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import ContentCard from "@/components/ContentCard";
import { Breadcrumb } from "@/interfaces";

const breadcrumbs: Breadcrumb[] = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about-us" },
    { label: "Mandatory Disclosure", url: "" },
];

const MandatoryDisclosure = () => {
    return (
        <>
            <Banner backgroundImage="/images/Section.png" pageTitle="Mandatory Disclosure (CBSE)" breadcrumbs={breadcrumbs} />

            <section className="px-[100px] py-[50px] bg-[#F6F6FF]">
                <SubTitle subTitle="Important Information" textAlign="left" />
                <Title title="Mandatory Disclosure" textAlign="left" />
                <ContentCard
                    image="/images/Content.png"
                    alt="Mandatory Disclosure"
                    imageLeft={true}
                    description={
                        <>
                            <p>This section provides all CBSE-mandated disclosures.</p>
                            <p>Transparency and compliance are our top priorities.</p>
                        </>
                    }
                />
            </section>
        </>
    );
};

export default MandatoryDisclosure;
