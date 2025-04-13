"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import PrincipalsNote from "@/pages/PrincipalsNote";
import MandatoryDisclosure from "@/pages/MandatoryDisclosure";
import Faculties from "@/pages/Faculties";
import Curriculum from "@/pages/Curriculum";

const Page = () => {
  const pathname = usePathname();

  useEffect(() => {
    const titleMap: Record<string, string> = {
      "/academics/faculty": "Faculty - Achiever International School",
      "/academics/curriculum": "Curriculum - Achiever International School",
      "/academics/academic-calendar-events": "Academic Calendar & Events - AISP",
      "/academics/awards": "Awards - Achiever International School",
    };

    document.title = pathname ? titleMap[pathname] || "AISP - Achiever International School" : "AISP - Achiever International School";
  }, [pathname]);

  const routes: Record<string, React.ReactNode> = {
    "/academics/faculty": <Faculties />,
    "/academics/curriculum": <Curriculum />,
    "/academics/academic-calendar-events": <PrincipalsNote />,
    "/academics/awards": <MandatoryDisclosure />,
  };

  return pathname && routes[pathname] ? routes[pathname] : (
    <h1 className="text-center mt-10 text-red-500 text-2xl">Page Not Found</h1>
  );
};

export default Page;
