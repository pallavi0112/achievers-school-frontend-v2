// "use client";
// import React from "react";
// import { usePathname } from "next/navigation";
// import WelcomeToAIS from "@/pages/WelcomeToAIS";
// import VisionMission from "@/pages/VisionMission";
// import PrincipalsNote from "@/pages/PrincipalsNote";
// import MandatoryDisclosure from "@/pages/MandatoryDisclosure";

// const Page = () => {
//     const pathname = usePathname();

//     const routes: Record<string, React.ReactNode> = {
//         "/about-us/welcome-to-ais": <WelcomeToAIS />,
//         "/about-us/vision-mission": <VisionMission />,
//         "/about-us/principals-note": <PrincipalsNote />,
//         "/about-us/mandatory-disclosure-cbse": <MandatoryDisclosure />,
//     };

//     return   pathname ? routes[pathname] : <h1 className="text-center mt-10 text-red-500 text-2xl">Page Not Found</h1> ;
// };

// export default Page;

"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import WelcomeToAIS from "@/pages/WelcomeToAIS";
import VisionMission from "@/pages/VisionMission";
import PrincipalsNote from "@/pages/PrincipalsNote";
import MandatoryDisclosure from "@/pages/MandatoryDisclosure";

const Page = () => {
  const pathname = usePathname();

  useEffect(() => {
    const titleMap: Record<string, string> = {
      "/about-us/welcome-to-ais": "Welcome to AIS - Achiever International School",
      "/about-us/vision-mission": "Vision & Mission - Achiever International School",
      "/about-us/principals-note": "Principal's Note - Achiever International School",
      "/about-us/mandatory-disclosure-cbse": "Mandatory Disclosure - Achiever International School",
    };

    document.title = pathname && titleMap[pathname] ? titleMap[pathname] : "AISP - Achiever International School";
  }, [pathname]);

  const routes: Record<string, React.ReactNode> = {
    "/about-us/welcome-to-ais": <WelcomeToAIS />,
    "/about-us/vision-mission": <VisionMission />,
    "/about-us/principals-note": <PrincipalsNote />,
    "/about-us/mandatory-disclosure-cbse": <MandatoryDisclosure />,
  };

  return pathname && routes[pathname] ? (
    routes[pathname]
  ) : (
    <h1 className="text-center mt-10 text-red-500 text-2xl">Page Not Found</h1>
  );
};

export default Page;

