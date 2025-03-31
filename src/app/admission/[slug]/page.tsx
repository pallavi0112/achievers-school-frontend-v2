"use client";
import React from "react";
import { usePathname } from "next/navigation";
import VisionMission from "@/pages/VisionMission";
import PrincipalsNote from "@/pages/PrincipalsNote";
import MandatoryDisclosure from "@/pages/MandatoryDisclosure";
import AdmissionProcess from "@/pages/AdmissionProcess";
import AcademicStreams from "@/pages/AcademicStreams";


const Page = () => {
    const pathname = usePathname();

    const routes: Record<string, React.ReactNode> = {
        "/admission/admission-process": <AdmissionProcess />,
        "/admission/fee-structure": <VisionMission />,
        "/admission/withdrawal": <PrincipalsNote />,
        "/admission/academic-streams-xi-xii": <AcademicStreams />,
    };

    return routes[pathname] || <h1 className="text-center mt-10 text-red-500 text-2xl">Page Not Found</h1>;
};

export default Page;
