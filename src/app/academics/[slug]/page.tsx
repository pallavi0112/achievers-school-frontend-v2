"use client";
import React from "react";
import { usePathname } from "next/navigation";
import PrincipalsNote from "@/pages/PrincipalsNote";
import MandatoryDisclosure from "@/pages/MandatoryDisclosure";
import Faculties from "@/pages/Faculties";
import Curriculum from "@/pages/Curriculum";


const Page = () => {
    const pathname = usePathname();

    const routes: Record<string, React.ReactNode> = {
        "/academics/faculty": <Faculties/>,
        "/academics/curriculum": <Curriculum />,
        "/academics/academic-calendar-events": <PrincipalsNote />,
        "/academics/awards": <MandatoryDisclosure />,
    };

    return routes[pathname] || <h1 className="text-center mt-10 text-red-500 text-2xl">Page Not Found</h1>;
};

export default Page;
