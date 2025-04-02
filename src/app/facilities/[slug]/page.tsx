"use client";
import React from "react";
import { usePathname } from "next/navigation";
import PrincipalsNote from "@/pages/PrincipalsNote";
import MandatoryDisclosure from "@/pages/MandatoryDisclosure";
import Laboratories from "@/pages/Laboratories";
import SportsInfrastructure from "@/pages/SportsInfrastructure";


const Page = () => {
    const pathname = usePathname();

    const routes: Record<string, React.ReactNode> = {
        "/facilities/laboratories": <Laboratories/>,
        "/facilities/sports-infrastructure": <SportsInfrastructure/>,
        "/facilities/school-transport": <PrincipalsNote />,
        "/facilities/library": <MandatoryDisclosure />,
        "/facilities/smart-class" : <MandatoryDisclosure />,
    };

    return pathname ? routes[pathname] : <h1 className="text-center mt-10 text-red-500 text-2xl">Page Not Found</h1>;
};

export default Page;
